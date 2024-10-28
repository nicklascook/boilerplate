import { useSession } from "next-auth/react";
import { api } from "./api";

/**
 * returns undefined if the subscription status is loading
 */
export function useIsSubscribed(): "admin" | boolean | undefined {
  const session = useSession();
  const { data, status } = api.user.subscriptionStatus.useQuery(undefined, {
    enabled: session.status === "authenticated",
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });

  if (data === "admin") {
    return "admin";
  }
  if (status !== "success") {
    return undefined;
  }
  // Checking for "incomplete" is temporary, but worth not annoying customers.
  // I think incomplete still means they have paid.
  if (data === "active" || data === "incomplete") {
    return true;
  }
  return false;
}
