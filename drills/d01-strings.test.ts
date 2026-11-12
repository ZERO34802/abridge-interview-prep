import { describe, expect, it } from "vitest";
import { capitalize, divider, initials, isQuestion, mentions, redact, shout, truncate } from "./d01-strings.js";

describe("d01 strings", () => {
  it("shout", () => {
    expect(shout("help")).toBe("HELP!");
  });
  it("isQuestion", () => {
    expect(isQuestion("  Any pain?  ")).toBe(true);
    expect(isQuestion("No pain")).toBe(false);
  });
  it("capitalize", () => {
    expect(capitalize("headache")).toBe("Headache");
    expect(capitalize("")).toBe("");
  });
  it("initials", () => {
    expect(initials("karthik panicker")).toBe("KP");
    expect(initials("Ada")).toBe("A");
  });
  it("mentions", () => {
    expect(mentions("Took IBUPROFEN today", "ibuprofen")).toBe(true);
    expect(mentions("Took nothing", "ibuprofen")).toBe(false);
  });
  it("redact", () => {
    expect(redact("John said John is fine", "John")).toBe("*** said *** is fine");
  });
  it("truncate", () => {
    expect(truncate("Patient reports headache", 10)).toBe("Patient...");
    expect(truncate("Patient reports headache", 10).length).toBe(10);
    expect(truncate("Short", 10)).toBe("Short");
  });
  it("divider", () => {
    expect(divider(5)).toBe("-----");
    expect(divider(0)).toBe("");
  });
});
