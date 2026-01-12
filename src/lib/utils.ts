import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const get = (obj: Record<string, unknown>, key: string, defaultValue: any): any => {
  let result: any = obj;

  for (const part of key.split('.')) result = result[part];

  return result ?? defaultValue;
};

export const stateful = <Args extends any[], R>(cb: (...args: Args) => Promise<R>) => {
  const state = {
    isRunning: false,
    async fn(...args: Args): Promise<R> {
      state.isRunning = true;

      try {
        return await cb(...args);
      } finally {
        state.isRunning = false;
      }
    }
  };

  return state;
}