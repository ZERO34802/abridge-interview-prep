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

  private maxAttempts: number = 0;
  private baseDelayMs: number = 0;
  private attempt: number = 0;

  constructor(maxAttempts: number, baseDelayMs: number) {
    this.maxAttempts = maxAttempts;
    this.baseDelayMs = baseDelayMs;
    this.attempt = 0;
  }

  recordAttempt(): void {
    this.attempt += 1;
  }

  get attempts(): number {
    return this.attempt;
  }

  canRetry(): boolean {
    return this.maxAttempts > this.attempt;
  }

  delayMs(attempt: number): number {
    return this.baseDelayMs * Math.pow(2,(attempt - 1));
  }
}
