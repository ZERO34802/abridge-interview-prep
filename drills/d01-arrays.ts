// Day 1 drills: ARRAY methods (the JS equivalent of std::vector + <algorithm>)
// Each drill names the method(s) to use. Do NOT write a manual for-loop unless told to.
// Run: npx vitest run d01-arrays

/** [1, 2, 3] -> [1, 4, 9]      Use: map        (C++: std::transform) */
export function squares(nums: number[]): number[] {
  throw new Error("TODO");
}

/** [1, 2, 3, 4] -> [2, 4]      Use: filter     (C++: std::copy_if) */
export function evens(nums: number[]): number[] {
  throw new Error("TODO");
}

/** [1, 2, 3] -> 6, [] -> 0      Use: reduce (with an initial value!)     (C++: std::accumulate) */
export function sum(nums: number[]): number {
  throw new Error("TODO");
}

/** [3, 9, 2] -> 9, [] -> undefined      Use: Math.max with spread (...)     (C++: *max_element) */
export function maxOf(nums: number[]): number | undefined {
  throw new Error("TODO");
}

/** First word with length >= minLen, or undefined.      Use: find     (C++: std::find_if) */
export function firstLongWord(words: string[], minLen: number): string | undefined {
  throw new Error("TODO");
}

/** Is there any negative number?      Use: some     (C++: std::any_of) */
export function hasNegative(nums: number[]): boolean {
  throw new Error("TODO");
}

/** Are all numbers positive? (empty array -> true)      Use: every     (C++: std::all_of) */
export function allPositive(nums: number[]): boolean {
  throw new Error("TODO");
}

/**
 * Remove duplicates, sort ascending NUMERICALLY.
 *   [10, 2, 10, 1] -> [1, 2, 10]
 * Use: new Set, spread or Array.from, sort with a comparator.
 * Trap: what does [10, 2, 1].sort() return without a comparator? Try it in the playground.
 */
export function uniqueSorted(nums: number[]): number[] {
  throw new Error("TODO");
}

/**
 * Count how many times each word appears.
 *   ["pain", "fever", "pain"] -> { pain: 2, fever: 1 }
 * Use: reduce OR for...of, and ?? for the "not seen yet" case.     (C++: unordered_map<string,int>)
 */
export function countWords(words: string[]): Record<string, number> {
  throw new Error("TODO");
}

/** [[1, 2], [3], []] -> [1, 2, 3]      Use: flat */
export function flatten(nested: number[][]): number[] {
  throw new Error("TODO");
}

/**
 * Split into groups of `size`. The last group may be smaller.
 *   chunk([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]]
 * Use: a for loop stepping by `size` + slice. (Useful for batching LLM calls.)
 */
export function chunk(nums: number[], size: number): number[][] {
  throw new Error("TODO");
}

/**
 * Return the top `n` largest numbers in descending order WITHOUT changing the input array.
 *   topN([5, 1, 9, 3], 2) -> [9, 5]
 * Use: copy first ([...nums] or toSorted), sort descending, slice.
 * Trap: .sort() mutates the original array in place (unlike map/filter).
 */
export function topN(nums: number[], n: number): number[] {
  throw new Error("TODO");
}
