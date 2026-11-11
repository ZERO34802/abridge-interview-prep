// Exercise 4: generics and constraints
// Video sections: generics, generic constraints (extends), keyof
// Run: npx vitest run ex04
// Java comparison: like <T> in Java, but types are erased at compile time
// and constraints use `extends` for shapes, not just classes.

/** First element, or undefined for an empty array. Works for any T. */
export function first<T>(items: T[]): T | undefined {
  throw new Error("TODO");
}

/**
 * Group items by a key function.
 *   groupBy(visit, (l) => l.speaker) -> { clinician: [...], patient: [...] }
 * Only keys that actually appear should be present.
 */
export function groupBy<T, K extends string>(items: T[], keyFn: (item: T) => K): Partial<Record<K, T[]>> {
  throw new Error("TODO");
}

/**
 * Pick one property from every object.
 *   pluck(visit, "id") -> [1, 2, 3, ...]   (typed as number[])
 * Hint: <T, K extends keyof T> and return T[K][]
 */
export function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  throw new Error("TODO");
}
