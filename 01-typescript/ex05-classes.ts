// Exercise 5: classes, access modifiers, readonly, constructor shorthand, interfaces
// Video sections: classes, private/public/protected, getters, interfaces with classes
// Run: npx vitest run ex05
// Java comparison: `private` here is compile-time only. `#field` is truly private at runtime.

export interface Backoff {
  delayMs(attempt: number): number;
}

/**
 * Tracks retries for a flaky call (e.g. an LLM API).
 *
 * - constructor(maxAttempts: number, baseDelayMs: number)
 *   Try the constructor shorthand: constructor(private readonly maxAttempts: number, ...)
 * - recordAttempt(): call once per attempt made
 * - get attempts(): number of attempts recorded so far (read-only getter)
 * - canRetry(): true while attempts < maxAttempts
 * - delayMs(attempt): exponential backoff = baseDelayMs * 2^(attempt - 1)
 *     attempt 1 -> base, 2 -> base*2, 3 -> base*4
 */
export class RetryPolicy implements Backoff {
  constructor(maxAttempts: number, baseDelayMs: number) {
    throw new Error("TODO");
  }

  recordAttempt(): void {
    throw new Error("TODO");
  }

  get attempts(): number {
    throw new Error("TODO");
  }

  canRetry(): boolean {
    throw new Error("TODO");
  }

  delayMs(attempt: number): number {
    throw new Error("TODO");
  }
}
