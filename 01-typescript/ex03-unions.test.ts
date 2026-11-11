import { describe, expect, it } from "vitest";
import { describeResult, toMs } from "./ex03-unions.js";

describe("toMs", () => {
  it("passes numbers through", () => {
    expect(toMs(4200)).toBe(4200);
  });
  it("parses mm:ss strings", () => {
    expect(toMs("01:30")).toBe(90_000);
    expect(toMs("00:00")).toBe(0);
  });
});

describe("describeResult", () => {
  it("handles ok", () => {
    expect(describeResult({ status: "ok", text: "...", tokens: 120 })).toBe("ok (120 tokens)");
  });
  it("handles retryable and fatal errors", () => {
    expect(describeResult({ status: "error", message: "rate limited", retryable: true })).toBe(
      "error: rate limited [retryable]",
    );
    expect(describeResult({ status: "error", message: "bad request", retryable: false })).toBe(
      "error: bad request [fatal]",
    );
  });
  it("handles refused", () => {
    expect(describeResult({ status: "refused", reason: "unsafe content" })).toBe("refused: unsafe content");
  });
});
