// Day 2 drills: OBJECTS, destructuring, spread, ?. and ??, Map/Set, JSON
// These show up in every Express handler and React component.
// Run: npx vitest run d02

export interface Patient {
  id: string;
  name: string;
  age?: number; // optional: may be missing
  contact?: { phone?: string; email?: string };
}

/**
 * Return a NEW patient with the name changed. Do not modify the input.
 * Use: object spread { ...obj, key: value }     (C++: copy, then assign one field)
 */
export function renamePatient(p: Patient, newName: string): Patient {
  const newPatient: Patient = {...p,name:newName};
  return newPatient;
}

/**
 * Return "Name (age)" or "Name (age unknown)" if age is missing.
 *   ({ id: "1", name: "Ana", age: 40 }) -> "Ana (40)"
 * Use: destructuring in the parameter list:  function f({ name, age }: Patient)
 * and ?? for the default.
 */
export function label({ name, age }: Patient): string {
  const ageUse = age ?? `age unknown`;
  return `${name} (${ageUse})`;
}

/**
 * The patient's email, or "no email" if contact or email is missing.
 * Use: optional chaining ?. and ??  (no if-statements)
 */
export function emailOf(p: Patient): string {
  const email: string = p.contact?.email ?? `no email`;
  return email;
}

/**
 * Turn an object into "key=value" pairs joined by "&".
 *   { a: 1, b: "x" } -> "a=1&b=x"
 * Use: Object.entries, map, join
 */
export function toQueryString(params: Record<string, string | number>): string {
  return Object.entries(params).map((value,index)=> {
    const [key, val] = value;
    return `${key}=${val}`;
  }).join("&");
}

/**
 * Keep only the keys whose value is not undefined.
 *   { a: 1, b: undefined, c: 3 } -> { a: 1, c: 3 }
 * Use: Object.entries, filter, Object.fromEntries
 */
export function dropUndefined(obj: Record<string, unknown>): Record<string, unknown> {
  const res = Object.fromEntries(Object.entries(obj).filter((value) => {
    const [key, val] = value;
    return val !== undefined;
  }));
  return res;
}


/**
 * Merge default settings with user overrides (overrides win).
 *   mergeSettings({ model: "a", temp: 0 }, { temp: 0.7 }) -> { model: "a", temp: 0.7 }
 * Use: spread two objects. Question: which one goes last, and why?
 */
export function mergeSettings<T extends object>(defaults: T, overrides: Partial<T>): T {
  return {...defaults,...overrides};
}

/**
 * Index patients by id for O(1) lookup.
 * Use: new Map, set    (C++: unordered_map<string, Patient>)
 */
export function indexById(patients: Patient[]): Map<string, Patient> {
  const res = patients.reduce<Map<string,Patient>>((mp,curr)=> {
    mp.set(curr.id, curr);
    return mp;
  },new Map())
  return res;
}

/**
 * Count words using a Map instead of a plain object.
 *   ["pain", "fever", "pain"] -> Map { "pain" => 2, "fever" => 1 }
 * Use: Map get/set and ??.   Compare with yesterday's Record version.
 */
export function countWithMap(words: string[]): Map<string, number> {
  const res =  words.reduce((mp, curr) => {
    mp.set(curr, (mp.get(curr) ?? 0) + 1)
    return mp;
  },new Map());
  return res;
}

/**
 * Do these two arrays share at least one value?
 * Use: new Set, has, some     (O(n + m), not O(n * m))
 */
export function sharesAny(a: string[], b: string[]): boolean {
  const st = new Set();
  const n = a.length, m = b.length;
  for (const i of a) st.add(i);
  for (const i of b) st.add(i);
  return st.size < (n + m) ? true : false;
}

/**
 * Parse a JSON string. Return the parsed value, or null if it is not valid JSON.
 * Use: JSON.parse inside try/catch. Return type is `unknown` on purpose: why?
 */
export function safeParse(text: string): unknown {
  try {
    const res = JSON.parse(text);
    return res;
  }catch { 
    const err: unknown = null;
    return err;
  }
}

/**
 * Pretty-print an object as JSON with 2-space indentation.
 * Use: JSON.stringify with its third argument.
 */
export function pretty(value: unknown): string {
  return JSON.stringify(value,null,2);
}
