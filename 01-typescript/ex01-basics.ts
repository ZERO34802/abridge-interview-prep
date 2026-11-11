// Exercise 1: primitive types, function signatures, return types
// Video sections: types, type inference, functions
// Run: npx vitest run ex01

/**
 * Convert milliseconds into "mm:ss", zero-padded.
 *   formatTimestamp(0)       -> "00:00"
 *   formatTimestamp(65_000)  -> "01:05"
 *   formatTimestamp(600_999) -> "10:00"   (drop leftover milliseconds)
 */
export function formatTimestamp(ms: number): string {
  throw new Error("TODO");
}

/**
 * Count the words in a string. Words are separated by any whitespace.
 * Leading/trailing/repeated spaces must not create empty "words".
 *   countWords("  chest pain   since Monday ") -> 4
 *   countWords("")                             -> 0
 */
export function countWords(text: string): number {
  throw new Error("TODO");
}
