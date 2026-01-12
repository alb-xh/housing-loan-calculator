import * as cheerio from 'cheerio';
import { DataSchema } from './db';

export const parseData = (html: string): DataSchema => {
  const $ = cheerio.load(html);

  const tables = $('#middleColumn > * tbody').slice(-2);
  const interestNorms = tables.eq(0);
  const banks = tables.eq(1);

  const banksNames = banks.find('tr').slice(1).toArray().reduce((acc: any, row) => {
    const cells = $(row).find('td');
    const name = cells.eq(0).text().trim();
    const code = cells.eq(1).text().trim();

    if (code && name) acc[code] = name;
    
    return acc;
  }, {});

  const interestNormRows = interestNorms.find('tr');
  const banksData = interestNormRows.eq(1).find('td').toArray().slice(1).map((el) => {
    const code = $(el).text().trim();
    const name = code ? banksNames[code] : null;

    return { code, name } as any
  });

  const interestNormData = interestNormRows.slice(2).toArray();

  for (const row of interestNormData) {
    const [ period, ...rest ] = $(row).find('td').toArray();
    if (!period) continue;

    const [ start, end ] = $(period).text().trim().split('-').map(Number);

    rest.forEach((cell, i) => {
      const bank = banksData[i];
      const rate = $(cell).text().trim();

      if (!rate || !bank) return;

      const interest = { months: { start, end }, rate: Number(rate) };

      bank.interestNorms ??= [];
      bank.interestNorms.push(interest);
    });
  }

  return {
    updatedAt: new Date().toISOString(),
    banks: banksData.filter((bank) => bank.name),
  };
}

export const scrape = async () => {
  const res = await fetch(
    new URL('https://www.bankofalbania.org/Mbikeqyrja/Sistemi_financiar_normat_e_interesit_dhe_komisionet/Normat_nominale_dhe_NEI_per_individe'), 
    {
      method: 'POST',
      body: new URLSearchParams({
        sourcePage: '',
        targetPage: '',
        sessionVars: `lang=Lng1&ln=1&contentId=16983&uni=${Date.now().toString() + Math.floor(Math.random() * 1e12)}&lng=en&recPages=multi&crd=0,11,11,2,0,16983`,
        phpVars: 'event=normat_nominale_individ.search(ipb_mon=1;ipb_sherbimi_produkti=1;ipb_norma=3)'
      }),
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'User-Agent': 'Mozilla/5.0'
      }),
    },
  );

  const html = await res.text();

  return parseData(html);
}
