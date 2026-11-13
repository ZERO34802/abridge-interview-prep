// Exercise 4: generics and constraints
// Video sections: generics, generic constraints (extends), keyof
// Run: npx vitest run ex04
// Java comparison: like <T> in Java, but types are erased at compile time
// and constraints use `extends` for shapes, not just classes.

/** First element, or undefined for an empty array. Works for any T. */
export function first<T>(items: T[]): T | undefined {
  if (items.length > 0) {
    return items[0];
  }else return undefined;
}

/**
 * Group items by a key function.
 *   groupBy(visit, (l) => l.speaker) -> { clinician: [...], patient: [...] }
 * Only keys that actually appear should be present.
 */
export function groupBy<T, K extends string>(items: T[], keyFn: (item: T) => K): Partial<Record<K, T[]>> {
   const res = new Map<K,T[]>();
   for (const item of items) {
    const temp:K = keyFn(item);
    const arr = (res.get(temp) ?? []);
    arr.push(item);
    res.set(temp,arr);
   }
   return Object.fromEntries(res) as Partial<Record<K, T[]>>;
}

/**
 * Pick one property from every object.
 *   pluck(visit, "id") -> [1, 2, 3, ...]   (typed as number[])
 * Hint: <T, K extends keyof T> and return T[K][]
 */
export function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const res: T[K][] = [];
  items.forEach((value) => {
    res.push(value[key]);
  });
  return res;
}
