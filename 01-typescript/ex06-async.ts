// Exercise 6: typed async code (Promise<T>, async/await, error handling)
// Not always in TS videos, but this is what Node/LLM interviews actually test.
// Run: npx vitest run ex06

import { resolve } from "node:dns";

/** Resolve after `ms` milliseconds. */
export function sleep(ms: number): Promise<void> {
  const res:Promise<void> = new Promise((res,rej) => {
    setTimeout(()=> {
      res();
    },ms);
  });
  return res;
}

/**
 * Race a promise against a timer.
 * Resolve with the promise's value if it settles first,
 * otherwise reject with new Error("timeout").
 * Hint: Promise.race. Bonus: clear the timer so it does not keep the process alive.
 */
export async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const res:Promise<T> =  Promise.race([promise, new Promise<T>((res,rej) => {
    setTimeout(()=> {
      rej(new Error("timeout"));
    },ms);
  })]);
  return res;
}

/**
 * Call `fn` until it succeeds, up to `attempts` times in total.
 * Wait `delayMs` between tries (use sleep). If every try fails, rethrow the LAST error.
 * Interview follow-up to think about: which errors should NOT be retried?
 */
export async function retry<T>(fn: () => Promise<T>, attempts: number, delayMs = 0): Promise<T> {
  let tries = 0;
  let lastErr: unknown;
  while(tries < attempts) {
    try {
      const p = await fn();
      return p;
    }catch (err) {
      lastErr = err;
      tries++;
      if(tries < attempts) {
        await sleep(delayMs);
      }else {
        throw err;
      }
    }
  }
  throw lastErr;
}

/**
 * Run independent async calls in parallel and return results in input order.
 *   await mapParallel([1, 2, 3], async (n) => n * 2) -> [2, 4, 6]
 * Question for NOTES.md: how is this different from awaiting inside a for loop?
 */
export async function mapParallel<T, R>(items: T[], fn: (item: T) => Promise<R>): Promise<R[]> {
  const arr = items.map(fn);
  try {
    const p = await Promise.all(arr);
    return p;
  }catch(err) {
    throw err;
  }
}
