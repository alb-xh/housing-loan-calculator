import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const get = (obj: Record<string, unknown>, key: string, defaultValue: any): any => {
  let result: any = obj;

  for (const part in key.split('.')) result = result[part];

  return result ?? defaultValue;
};
