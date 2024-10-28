import React from "react";

import { useRouter } from "next/router";
import Button from "./Button";
import { useIsSubscribed } from "~/lib/hooks";
import toast from "~/lib/toast";
import { api } from "~/lib/api";

type Props = {
  className?: string;
  label?: string;
};

const PayButton: React.FC<Props> = ({ className, label }) => {
  const isSubscribed = useIsSubscribed();
  const { mutateAsync: createCheckoutSession, isPending } =
    api.stripe.createCheckoutSession.useMutation();
  const { push } = useRouter();

  return (
    <Button
      onClick={async () => {
        if (isSubscribed) {
          toast("error", "You are already subscribed");
          return;
        }
        if (isPending) {
          return;
        }
        const { checkoutUrl } = await createCheckoutSession();
        if (checkoutUrl) {
          await push(checkoutUrl);
        }
      }}
      className={className}
    >
      {isPending ? "Loading..." : (label ?? "Subscribe to Premium")}
    </Button>
  );
};

export default PayButton;
