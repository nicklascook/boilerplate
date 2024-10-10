import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const userRouter = createTRPCRouter({
  sendFeedback: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        message: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { error } = await resend.emails.send({
        from: `TODO Feedback <onboarding@resend.dev>`,
        to: ["nicklascook@hotmail.com"],
        subject: `Feedback from TODO`,
        html: `
        Message: <p>${input.message}</p><br/>
        Email: <strong>${input.email}</strong><br/>
        From user: <p>${ctx.session?.user.id ?? "Unknown"}</p>
        `,
      });

      if (error) {
        throw new Error(`Could not send feedback: ${error.message}`);
      }
    }),
});
