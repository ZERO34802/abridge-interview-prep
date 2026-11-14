// Day 3 drill: PREDICT THE COMPILER (about 15-20 min)
// Goal: know whether code type-checks BEFORE you see the red squiggle.
//
// For each snippet:
//   1. Read it. Do NOT uncomment yet.
//   2. Fill in the three lines under it:
//        Compiles?  yes / no
//        Error:     your guess at the message, in your own words (or "none")
//        Fix:       how you'd change it so it is correct AND safe
//   3. Uncomment ONLY that snippet. Hover over the red squiggle (if any) and compare with your guess.
//   4. Apply your fix, confirm it is clean, then comment the snippet out again.
//
// Not every snippet has a type error. Some compile but still hide a bug. Watch for those.
// Use the 3-step method: what type is X (hover), what type is expected (Y), why isn't X a Y?

/* ---------- 1 ---------- */

function isValidData(data: unknown): data is {name:string} {
    return (typeof data === "object" && data !== null && "name" in data && typeof data.name === "string");
}

export function d1(text: string) {
  const data: unknown = JSON.parse(text);
  if(isValidData(data)) {
    return data.name;
  }else throw new Error("invalid object format");
}
// Compiles? No
// Error: data is unknown and ts doesn't allow access till its checked using typeguards 
// Fix: typeguard to check if JSON.parse returns the right format which has data.name in it

/* ---------- 2 ---------- */
function isValid(data: unknown) : data is {nmae: number} {
    return (typeof data === "object" && data !== null && "nmae" in data && typeof data.nmae === "number");
}

export function d2(text: string) {
  const d:unknown = JSON.parse(text);
  if(isValid(d)) {
    const n: number = d.nmae;
    return n;
  }
  throw new Error("Error in format");
}
// Compiles? yes
// Error: don't see an error if d does have a property called nmae which is a number, if there isn't one, there will be an error
// Fix: first just the above two and then I'll implement the fix which I think will be to use d as unknown and then implement a typeguard

/* ---------- 3 ---------- */
// type Result = { status: "ok"; tokens: number } | { status: "error"; message: string };
// export function d3(r: Result) {
//   return r.tokens;
// }
// Compiles? No
// Error: That's becasue the Result type consists of a union of two formats and one of them doesn't have tokens
// Fix: again implement a typeguard to see if it's the right format, I think we can just check check if r.status === "ok" to access tokens

/* ---------- 4 ---------- */
// export function d4(p: { email?: string }) {
//   return p.email.length;
// }
// Compiles?
// Error:
// Fix:

/* ---------- 5 ---------- */
// export function d5() {
//   const first = [1, 2, 3][0];
//   return first.toFixed(1);
// }
// Compiles?
// Error:
// Fix:

/* ---------- 6 ---------- */
// const lines = [{ id: 1, text: "hi" }];
// export function d6() {
//   return lines.find((l) => l.id === 1).text;
// }
// Compiles?
// Error:
// Fix:

/* ---------- 7 ---------- */
// export function d7(xs: (string | undefined)[]) {
//   return xs.filter((x) => x !== undefined).map((x) => x.toUpperCase());
// }
// Compiles? Yes
// Error: ideally yes ? but I am just thinking about the case where it can be a "" string 
// Fix:

/* ---------- 8 ---------- */
export function d8() {
  try {
    JSON.parse("{");
  } catch (e) {
    if(e instanceof Error && e !== null && e.message !== null) {
        return e.message;
    }
  }
  return "";
}
// Compiles? yes
// Error: I genuinely don't see an error without un-commenting the code
// Fix:

/* ---------- 9 ---------- */
export async function d9(): Promise<number> {
  return 5;
}
// Compiles? no
// Error: "5" is a string and it should be returning number
// Fix:

/* ---------- 10 ---------- */
export async function d10(x: number): Promise<string> {
  if (x > 0) return "positive";
}
// Compiles?
// Error:
// Fix:

/* ---------- 11 ---------- */
// export async function d11() {
//   const [a, b] = await Promise.all([Promise.resolve(1), Promise.resolve("x")]);
//   return a.toUpperCase() + b;
// }
// Compiles?
// Error:
// Fix:

/* ---------- 12 ---------- */
// export const counts: Record<"clinician" | "patient", number> = { clinician: 1 };
// Compiles?
// Error:
// Fix:
