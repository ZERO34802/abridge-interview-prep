// Day 1 drills: STRING methods (the JS equivalent of std::string + <algorithm>)
// Each drill names the method(s) to use. Aim for under 2 minutes each, no Googling.
// Stuck for 3+ minutes? Look up ONLY that method on MDN, then write it from memory.
// Run: npx vitest run d01-strings

/** "help" -> "HELP!"            Use: toUpperCase, template literal */
export function shout(s: string): string {
  const upperString = s.toUpperCase();
  return `${upperString}!`;
}

/** "  Any pain?  " -> true, "No pain" -> false      Use: trim, endsWith */
export function isQuestion(s: string): boolean {
  const finalString = s.trim();
  if(finalString.endsWith("?")) {
    return true;
  }else {
    return false;
  }
}

/** "headache" -> "Headache", "" -> ""      Use: indexing/charAt, toUpperCase, slice */
export function capitalize(word: string): string {

  if(!word)return word;

  const secondHalf = word.slice(1);
  const firstChar = word.charAt(0).toUpperCase();
  return firstChar + secondHalf;
}

/** "karthik panicker" -> "KP"      Use: split, map, join (and capitalize the letters) */
export function initials(fullName: string): string {
  console.log("".charAt(0))
  const res = fullName.split(/\s+/).map((word) => word.charAt(0).toUpperCase()).join("");
  return res;
}

/** Case-insensitive search. ("Took IBUPROFEN today", "ibuprofen") -> true      Use: toLowerCase, includes */
export function mentions(text: string, term: string): boolean {
  return text.toLowerCase().includes(term.toLowerCase());
}

/** Replace EVERY occurrence of `word` with "***".      Use: replaceAll */
export function redact(text: string, word: string): string {
  return text.replaceAll(word,"***");
}

/**
 * Shorten to at most `max` characters total, ending with "..." if cut.
 *   truncate("Patient reports headache", 10) -> "Patient..."
 *   truncate("Short", 10)                    -> "Short"
 * Use: slice, length
 */
export function truncate(s: string, max: number): string {
  if (s.length <= max) {
    return s;
  }else {
    return s.slice(0,max - 3) + "...";
  }
}

/** divider(5) -> "-----"      Use: repeat */
export function divider(n: number): string {
  const s = "-".repeat(n);
  return s;
}
