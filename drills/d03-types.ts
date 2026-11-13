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
// export function d1(text: string) {
//   const data: unknown = JSON.parse(text);
//   return data.name;
// }
// Compiles?
// Error:
// Fix:

/* ---------- 2 ---------- */
// export function d2(text: string) {
//   const d = JSON.parse(text);
//   const n: number = d.nmae;
//   return n;
// }
// Compiles?
// Error:
// Fix:

/* ---------- 3 ---------- */
// type Result = { status: "ok"; tokens: number } | { status: "error"; message: string };
// export function d3(r: Result) {
//   return r.tokens;
// }
// Compiles?
// Error:
// Fix:

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
// Compiles?
// Error:
// Fix:

/* ---------- 8 ---------- */
// export function d8() {
//   try {
//     JSON.parse("{");
//   } catch (e) {
//     return e.message;
//   }
//   return "";
// }
// Compiles?
// Error:
// Fix:

/* ---------- 9 ---------- */
// export async function d9(): Promise<number> {
//   return "5";
// }
// Compiles?
// Error:
// Fix:

/* ---------- 10 ---------- */
// export async function d10(x: number): Promise<string> {
//   if (x > 0) return "positive";
// }
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
