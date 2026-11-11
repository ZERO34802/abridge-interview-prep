# Abridge Interview Prep

Practice repo for the Abridge Software Engineering Intern (Summer 2027) process.
Stack focus: **TypeScript → Node/Express → React → LLM workflows**, plus DSA.

## Setup
```bash
npm install
npm test            # run all tests (they fail until you solve them)
npx vitest run ex01 # run one exercise
npm run play        # run 01-typescript/playground.ts
npm run typecheck   # strict type check of everything
```

## How to code along (per video section)
1. **Watch + type** the section in `01-typescript/playground.ts`. Type it yourself; don't copy-paste. Run it with `npm run play`.
2. **Close the video.** Open the matching exercise file and solve it from memory.
3. **Run its tests:** `npx vitest run ex0N`. Also run `npm run typecheck`. Passing tests with type errors still counts as not done.
4. **Write 2–3 lines in `NOTES.md`:** what's different from C++/Java, and anything that surprised you.
5. **Commit:** `git commit -am "ex0N: <topic>"`.

No AI autocomplete while solving. Turn Copilot/Cursor tab off for this repo.

## Exercises
| # | File | Topics | Status |
|---|------|--------|--------|
| 1 | `ex01-basics.ts` | types, functions, return types | ☐ |
| 2 | `ex02-objects.ts` | interfaces, arrays, readonly, Record, undefined | ☐ |
| 3 | `ex03-unions.ts` | unions, narrowing, discriminated unions, never | ☐ |
| 4 | `ex04-generics.ts` | generics, constraints, keyof | ☐ |
| 5 | `ex05-classes.ts` | classes, access modifiers, getters, implements | ☐ |
| 6 | `ex06-async.ts` | Promise<T>, async/await, retry, timeout, parallel | ☐ |

## Coming next
- `02-node-express/`: Express + TypeScript API with Zod validation
- `03-react/`: React + TypeScript (Vite `react-ts`)
- `04-llm/`: transcript → clinical note with evidence links, plus a small eval
- `dsa/`: daily problems
