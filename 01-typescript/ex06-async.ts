// Exercise 6: typed async code (Promise<T>, async/await, error handling)
// Not always in TS videos, but this is what Node/LLM interviews actually test.
// Run: npx vitest run ex06

/** Resolve after `ms` milliseconds. */
export function sleep(ms: number): Promise<void> {
  throw new Error("TODO");
}

/**
 * Race a promise against a timer.
 * Resolve with the promise's value if it settles first,
 * otherwise reject with new Error("timeout").
 * Hint: Promise.race. Bonus: clear the timer so it does not keep the process alive.
 */
export function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  throw new Error("TODO");
}

/**
 * Call `fn` until it succeeds, up to `attempts` times in total.
 * Wait `delayMs` between tries (use sleep). If every try fails, rethrow the LAST error.
 * Interview follow-up to think about: which errors should NOT be retried?
 */
export async function retry<T>(fn: () => Promise<T>, attempts: number, delayMs = 0): Promise<T> {
  throw new Error("TODO");
}

/**
 * Run independent async calls in parallel and return results in input order.
 *   await mapParallel([1, 2, 3], async (n) => n * 2) -> [2, 4, 6]
 * Question for NOTES.md: how is this different from awaiting inside a for loop?
 */
export async function mapParallel<T, R>(items: T[], fn: (item: T) => Promise<R>): Promise<R[]> {
  throw new Error("TODO");
}
