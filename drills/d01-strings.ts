// Day 1 drills: STRING methods (the JS equivalent of std::string + <algorithm>)
// Each drill names the method(s) to use. Aim for under 2 minutes each, no Googling.
// Stuck for 3+ minutes? Look up ONLY that method on MDN, then write it from memory.
// Run: npx vitest run d01-strings

/** "help" -> "HELP!"            Use: toUpperCase, template literal */
export function shout(s: string): string {
  throw new Error("TODO");
}

/** "  Any pain?  " -> true, "No pain" -> false      Use: trim, endsWith */
export function isQuestion(s: string): boolean {
  throw new Error("TODO");
}

/** "headache" -> "Headache", "" -> ""      Use: indexing/charAt, toUpperCase, slice */
export function capitalize(word: string): string {
  throw new Error("TODO");
}

/** "karthik panicker" -> "KP"      Use: split, map, join (and capitalize the letters) */
export function initials(fullName: string): string {
  throw new Error("TODO");
}

/** Case-insensitive search. ("Took IBUPROFEN today", "ibuprofen") -> true      Use: toLowerCase, includes */
export function mentions(text: string, term: string): boolean {
  throw new Error("TODO");
}

/** Replace EVERY occurrence of `word` with "***".      Use: replaceAll */
export function redact(text: string, word: string): string {
  throw new Error("TODO");
}

/**
 * Shorten to at most `max` characters total, ending with "..." if cut.
 *   truncate("Patient reports headache", 10) -> "Patient..."
 *   truncate("Short", 10)                    -> "Short"
 * Use: slice, length
 */
export function truncate(s: string, max: number): string {
  throw new Error("TODO");
}

/** divider(5) -> "-----"      Use: repeat */
export function divider(n: number): string {
  throw new Error("TODO");
}
