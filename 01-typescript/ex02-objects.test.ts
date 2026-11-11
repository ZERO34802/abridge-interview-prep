import { describe, expect, it } from "vitest";
import { findLine, linesBySpeaker, wordsPerSpeaker } from "./ex02-objects.js";
import { visit } from "./fixtures.js";

describe("linesBySpeaker", () => {
  it("keeps only that speaker, in order", () => {
    expect(linesBySpeaker(visit, "patient").map((l) => l.id)).toEqual([2, 4, 6]);
  });
  it("does not mutate the input", () => {
    const copy = structuredClone(visit);
    linesBySpeaker(visit, "clinician");
    expect(visit).toEqual(copy);
  });
});

describe("wordsPerSpeaker", () => {
  it("counts words for each speaker", () => {
    expect(wordsPerSpeaker(visit)).toEqual({ clinician: 17, patient: 17 });
  });
  it("includes both keys even with no lines", () => {
    expect(wordsPerSpeaker([])).toEqual({ clinician: 0, patient: 0 });
  });
});

describe("findLine", () => {
  it("finds an existing line", () => {
    expect(findLine(visit, 4)?.text).toBe("Some nausea in the mornings.");
  });
  it("returns undefined when missing", () => {
    expect(findLine(visit, 99)).toBeUndefined();
  });
});
