// Day 1 drills: ARRAY methods (the JS equivalent of std::vector + <algorithm>)
// Each drill names the method(s) to use. Do NOT write a manual for-loop unless told to.
// Run: npx vitest run d01-arrays

/** [1, 2, 3] -> [1, 4, 9]      Use: map        (C++: std::transform) */
export function squares(nums: number[]): number[] {
  return nums.map((num)=> num*num);
}

/** [1, 2, 3, 4] -> [2, 4]      Use: filter     (C++: std::copy_if) */
export function evens(nums: number[]): number[] {
  return nums.filter((num)=> ((num%2) === 0));
}

/** [1, 2, 3] -> 6, [] -> 0      Use: reduce (with an initial value!)     (C++: std::accumulate) */
export function sum(nums: number[]): number {
  return nums.reduce((sum,curr)=> {
    sum += curr;
    return sum;
  },0);
}

/** [3, 9, 2] -> 9, [] -> undefined      Use: Math.max with spread (...)     (C++: *max_element) */
export function maxOf(nums: number[]): number | undefined {
  if(nums.length === 0) {
    return undefined;
  }
  return Math.max(...nums);
}

/** First word with length >= minLen, or undefined.      Use: find     (C++: std::find_if) */
export function firstLongWord(words: string[], minLen: number): string | undefined {
  return words.find((word)=> word.length >= minLen);
}

/** Is there any negative number?      Use: some     (C++: std::any_of) */
export function hasNegative(nums: number[]): boolean {
  return nums.some((num)=> num < 0);
}

/** Are all numbers positive? (empty array -> true)      Use: every     (C++: std::all_of) */
export function allPositive(nums: number[]): boolean {
  return nums.every((num) => (num > 0));
}

/**
 * Remove duplicates, sort ascending NUMERICALLY.
 *   [10, 2, 10, 1] -> [1, 2, 10]
 * Use: new Set, spread or Array.from, sort with a comparator.
 * Trap: what does [10, 2, 1].sort() return without a comparator? Try it in the playground.
 */
export function uniqueSorted(nums: number[]): number[] {
  nums.sort((a,b)=> (a - b));
  return nums.filter((value,index)=> (nums.indexOf(value) == (index)));
}

/**
 * Count how many times each word appears.
 *   ["pain", "fever", "pain"] -> { pain: 2, fever: 1 }
 * Use: reduce OR for...of, and ?? for the "not seen yet" case.     (C++: unordered_map<string,int>)
 */
export function countWords(words: string[]): Record<string, number> {
  return words.reduce<Record<string,number>>((map,curr)=> {
    map[curr] = (map[curr] ?? 0) + 1;
    return map;
  },{});
}

/** [[1, 2], [3], []] -> [1, 2, 3]      Use: flat */
export function flatten(nested: number[][]): number[] {
  return nested.flat();
}

/**
 * Split into groups of `size`. The last group may be smaller.
 *   chunk([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]]
 * Use: a for loop stepping by `size` + slice. (Useful for batching LLM calls.)
 */
export function chunk(nums: number[], size: number): number[][] {
  let res : number[][] = [];
  for (let i = 0;i < nums.length;i+=size) {
    let sub = nums.slice(i,i + size);
    res.push(sub);
  }
  return res;
}

/**
 * Return the top `n` largest numbers in descending order WITHOUT changing the input array.
 *   topN([5, 1, 9, 3], 2) -> [9, 5]
 * Use: copy first ([...nums] or toSorted), sort descending, slice.
 * Trap: .sort() mutates the original array in place (unlike map/filter).
 */
export function topN(nums: number[], n: number): number[] {
  const newRes = nums.toSorted((a,b)=>(b - a));
  return newRes.slice(0,n);
}
