import { describe, expect, it } from "vitest";
import { RetryPolicy } from "./ex05-classes.js";

describe("RetryPolicy", () => {
  it("counts attempts and stops at the limit", () => {
    const p = new RetryPolicy(3, 100);
    expect(p.attempts).toBe(0);
    expect(p.canRetry()).toBe(true);
    p.recordAttempt();
    p.recordAttempt();
    expect(p.canRetry()).toBe(true);
    p.recordAttempt();
    expect(p.attempts).toBe(3);
    expect(p.canRetry()).toBe(false);
  });

  it("backs off exponentially", () => {
    const p = new RetryPolicy(5, 100);
    expect([1, 2, 3, 4].map((a) => p.delayMs(a))).toEqual([100, 200, 400, 800]);
  });
});
