import { useIsClient } from "@/hooks/use-is-client";
import { PropsWithChildren } from "react";

export function ClientRender ({ children }: PropsWithChildren) {
  const isClient = useIsClient();
  return isClient ? children : null;
}
