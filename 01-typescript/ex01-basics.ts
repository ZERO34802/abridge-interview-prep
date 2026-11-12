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
  let finalTimestamp = "";

  let seconds = Math.floor((ms/1000));
  let minute = Math.floor((seconds/60));
  let rem_seconds = seconds%60;

  finalTimestamp = String(minute).padStart(2,"0") + ":" + String(rem_seconds).padStart(2,"0");
  return finalTimestamp;
}

/**
 * Count the words in a string. Words are separated by any whitespace.
 * Leading/trailing/repeated spaces must not create empty "words".
 *   countWords("  chest pain   since Monday ") -> 4
 *   countWords("")                             -> 0
 */

export function countWords(text: string): number {
  let word_count = 0
  let n = text.length;

  word_count = text.split(/\s+/).filter(Boolean).length;
  return word_count;
}
