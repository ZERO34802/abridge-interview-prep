import { describe, expect, it } from "vitest";
import { first, groupBy, pluck } from "./ex04-generics.js";
import { visit } from "./fixtures.js";

describe("first", () => {
  it("returns the first element or undefined", () => {
    expect(first([3, 2, 1])).toBe(3);
    expect(first<string>([])).toBeUndefined();
  });
});

describe("groupBy", () => {
  it("groups by speaker", () => {
    const groups = groupBy(visit, (l) => l.speaker);
    expect(groups.clinician?.map((l) => l.id)).toEqual([1, 3, 5]);
    expect(groups.patient?.map((l) => l.id)).toEqual([2, 4, 6]);
  });
  it("only includes keys that appear", () => {
    expect(Object.keys(groupBy(["a", "bb", "cc"], (s) => (s.length === 1 ? "short" : "long")))).toEqual([
      "short",
      "long",
    ]);
  });
});

describe("pluck", () => {
  it("picks a property from each item", () => {
    expect(pluck(visit, "id")).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
