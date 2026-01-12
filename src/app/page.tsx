/* eslint-disable react-hooks/purity */

import { isProd } from "@/env";
import { UnderConstructionDialog } from "@/components/under-construction-dialog";
import { db } from '@/lib/db';

const DAY = 24 * 60 * 60 * 1000;

export default async function Home() {
  const data = await db.read();
  const updatedAt = Date.parse(data.updatedAt);
  const now = Date.now();
  if (now - updatedAt >= DAY) console.log('FETCH');

  return (
    <>
      {isProd && <UnderConstructionDialog />}
    </>
  );
}

// curl 'https://www.bankofalbania.org/Supervision/Interest_rates_and_bank_commissions/Credit_Interest_Rate_for_Individuals' \
//   -H 'User-Agent: Mozilla/5.0' \
//   --data-raw 'phpVars=event=normat_nominale_individ.search(ipb_mon=1;ipb_sherbimi_produkti=1;ipb_norma=3)'
