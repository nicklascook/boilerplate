import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { getOrCreateStripeCustomerIdForUser } from "~/server/stripe/stripe-webhook-handlers";

export const stripeRouter = createTRPCRouter({
  createCheckoutSession: protectedProcedure.mutation(async ({ ctx }) => {
    const { stripe, session, db, req } = ctx;

    const customerId = await getOrCreateStripeCustomerIdForUser({
      db,
      stripe,
      userId: session.user?.id,
    });

    if (!customerId) {
      throw new Error("Could not create customer");
    }

    const baseUrl =
      process.env.NODE_ENV === "development"
        ? `http://${req.headers.host ?? "localhost:3000"}`
        : `https://${req.headers.host ?? process.env.NEXTAUTH_URL}`;

    // ! Subscription:
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      client_reference_id: session.user?.id,
      payment_method_types: ["card"],
      mode: "subscription",
      allow_promotion_codes: true,
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID_MONTHLY,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/app?checkoutSuccess=true`,
      cancel_url: `${baseUrl}?checkoutCanceled=true`,
      subscription_data: {
        metadata: {
          userId: session.user?.id,
        },
      },
    });

    // ! One-time payment:
    // const checkoutSession = await stripe.checkout.sessions.create({
    //   customer: customerId,
    //   client_reference_id: session.user?.id,
    //   payment_method_types: ["card"],
    //   mode: "payment",
    //   allow_promotion_codes: false,
    //   line_items: [
    //     {
    //       price: process.env.STRIPE_PRICE_ID_LIFETIME,
    //       quantity: 1,
    //     },
    //   ],
    //   success_url: `${baseUrl}/app?checkoutSuccess=true`,
    //   cancel_url: `${baseUrl}?checkoutCanceled=true`,
    // });

    return { checkoutUrl: checkoutSession.url };
  }),
  createBillingPortalSession: protectedProcedure.mutation(async ({ ctx }) => {
    const { stripe, session, db, req } = ctx;

    const customerId = await getOrCreateStripeCustomerIdForUser({
      db,
      stripe,
      userId: session.user?.id,
    });

    if (!customerId) {
      throw new Error("Could not create customer");
    }

    const baseUrl =
      process.env.NODE_ENV === "development"
        ? `http://${req.headers.host ?? "localhost:3000"}`
        : `https://${req.headers.host ?? process.env.NEXTAUTH_URL}`;

    const stripeBillingPortalSession =
      await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: `${baseUrl}`,
      });

    if (!stripeBillingPortalSession) {
      throw new Error("Could not create billing portal session");
    }

    return { billingPortalUrl: stripeBillingPortalSession.url };
  }),
});
