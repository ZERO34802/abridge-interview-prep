// Exercise 3: union types, literal types, narrowing, discriminated unions
// Video sections: union types, type narrowing (typeof / in / discriminated unions), never
// Run: npx vitest run ex03

/**
 * Accept a time as either a number (already milliseconds) or a "mm:ss" string.
 *   toMs(4200)    -> 4200
 *   toMs("01:30") -> 90000
 * Narrow with `typeof` before using string or number methods.
 */
export function toMs(input: number | string): number {
  throw new Error("TODO");
}

// The result of one LLM call. `status` is the discriminant.
export type LlmResult =
  | { status: "ok"; text: string; tokens: number }
  | { status: "error"; message: string; retryable: boolean }
  | { status: "refused"; reason: string };

/**
 * Turn a result into a one-line log message:
 *   ok      -> "ok (120 tokens)"
 *   error   -> "error: rate limited [retryable]"   or   "error: bad request [fatal]"
 *   refused -> "refused: unsafe content"
 *
 * Use a `switch (result.status)` and end with an exhaustiveness check:
 *   default: { const _never: never = result; return _never; }
 * Then try adding a 4th variant to LlmResult and watch the compiler complain.
 */
export function describeResult(result: LlmResult): string {
  throw new Error("TODO");
}
