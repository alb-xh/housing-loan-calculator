import fs from "fs/promises";

export type InterestNormDataSchema = {
  months: { start: number; end: number };
  rate: number;
};

export type BankDataSchema = {
  code: string;
  name: string;
  interestNorms: InterestNormDataSchema[];
};

export type DataSchema = {
  updatedAt: string;
  banks: BankDataSchema[];
};

const DB_PATH = "./src/data/db.json";

export const db = {
  read: async (): Promise<DataSchema> =>
    JSON.parse(await fs.readFile(DB_PATH, "utf-8")),
  write: async (data: DataSchema) =>
    fs.writeFile(DB_PATH, JSON.stringify(data, null, 2)),
};
