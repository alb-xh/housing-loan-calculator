/* eslint-disable react-hooks/purity */

import { isProd } from "@/env";
import { UnderConstructionDialog } from "@/components/under-construction-dialog";
import { db } from '@/lib/db';
import { scrape } from "@/lib/scraper";
import { stateful } from "@/lib/utils";
import { Banks } from "@/components/banks";

const DAY = 24 * 60 * 60 * 1000;
const scraper = stateful(scrape);

export default async function Home() {
  const data = await db.read();
  const expired = Date.now() - Date.parse(data.updatedAt) >= DAY;
  
  if (expired && !scraper.isRunning) {
    scraper.fn()
      .then(db.write)
      .catch(console.error);
  }

  return (
    <>
      <div className="flex w-full justify-center items-center">
        <Banks banks={data.banks} />
      </div>
      {isProd && <UnderConstructionDialog />}
    </>
  );
};