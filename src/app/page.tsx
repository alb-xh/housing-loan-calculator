/* eslint-disable react-hooks/purity */

import { isProd } from "@/env";
import { UnderConstructionDialog } from "@/components/under-construction-dialog";
import { db } from "@/lib/db";
import { scrape } from "@/lib/scraper";
import { stateful } from "@/lib/utils";
import { BankSelector } from "@/components/bank-selector";
import { LoanYearsSelector } from "@/components/loan-years-selector";
import { AmountInput } from "@/components/amount-input";

const DAY = 24 * 60 * 60 * 1000;
const scraper = stateful(scrape);

export default async function Home() {
  const data = await db.read();
  const expired = Date.now() - Date.parse(data.updatedAt) >= DAY;

  if (expired && !scraper.isRunning) {
    scraper.fn().then(db.write).catch(console.error);
  }

  return (
    <>
      <div className="flex flex-col gap-6 w-full justify-center items-center">
        <BankSelector banks={data.banks} />
        <LoanYearsSelector />
        <AmountInput />
      </div>
      {isProd && <UnderConstructionDialog />}
    </>
  );
}
