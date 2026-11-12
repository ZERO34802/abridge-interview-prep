import { describe, expect, it } from "vitest";
import {
  allPositive,
  chunk,
  countWords,
  evens,
  firstLongWord,
  flatten,
  hasNegative,
  maxOf,
  squares,
  sum,
  topN,
  uniqueSorted,
} from "./d01-arrays.js";

describe("d01 arrays", () => {
  it("squares", () => expect(squares([1, 2, 3])).toEqual([1, 4, 9]));
  it("evens", () => expect(evens([1, 2, 3, 4])).toEqual([2, 4]));
  it("sum", () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([])).toBe(0);
  });
  it("maxOf", () => {
    expect(maxOf([3, 9, 2])).toBe(9);
    expect(maxOf([])).toBeUndefined();
  });
  it("firstLongWord", () => {
    expect(firstLongWord(["bp", "nausea", "headache"], 5)).toBe("nausea");
    expect(firstLongWord(["bp"], 5)).toBeUndefined();
  });
  it("hasNegative", () => {
    expect(hasNegative([1, -2, 3])).toBe(true);
    expect(hasNegative([1, 2])).toBe(false);
  });
  it("allPositive", () => {
    expect(allPositive([1, 2])).toBe(true);
    expect(allPositive([1, 0])).toBe(false);
    expect(allPositive([])).toBe(true);
  });
  it("uniqueSorted", () => expect(uniqueSorted([10, 2, 10, 1])).toEqual([1, 2, 10]));
  it("countWords", () => {
    expect(countWords(["pain", "fever", "pain"])).toEqual({ pain: 2, fever: 1 });
    expect(countWords([])).toEqual({});
  });
  it("flatten", () => expect(flatten([[1, 2], [3], []])).toEqual([1, 2, 3]));
  it("chunk", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([], 3)).toEqual([]);
  });
  it("topN does not mutate input", () => {
    const input = [5, 1, 9, 3];
    expect(topN(input, 2)).toEqual([9, 5]);
    expect(input).toEqual([5, 1, 9, 3]);
  });
});
