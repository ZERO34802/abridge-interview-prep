import { describe, expect, it } from "vitest";
import { countWords, formatTimestamp } from "./ex01-basics.js";

describe("formatTimestamp", () => {
  it("pads minutes and seconds", () => {
    expect(formatTimestamp(0)).toBe("00:00");
    expect(formatTimestamp(65_000)).toBe("01:05");
  });
  it("drops leftover milliseconds", () => {
    expect(formatTimestamp(600_999)).toBe("10:00");
  });
});

describe("countWords", () => {
  it("ignores extra whitespace", () => {
    expect(countWords("  chest pain   since Monday ")).toBe(4);
  });
  it("returns 0 for empty or blank text", () => {
    expect(countWords("")).toBe(0);
    expect(countWords("   ")).toBe(0);
  });
});
