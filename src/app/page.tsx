import { isProd } from "@/env";
import { UnderConstructionDialog } from "@/components/under-construction-dialog";

export default function Home() {
  return (
    <>
    {isProd && <UnderConstructionDialog />}
    </>
  );
}
