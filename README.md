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

## JS fluency drills (`drills/`)
Small "use exactly this method" problems to learn the JS standard toolbox the way you know the C++ STL.
- Target **under 2 minutes per drill**, no Googling. Stuck for 3+ minutes? Look up only that method on MDN, then close it and write the code from memory.
- Next morning: delete your answers (`git stash` or rewrite) and redo the ones you looked up.
- Add every new method to the toolbox list in `NOTES.md` with a one-line example.

| Day | File | Topics |
|---|---|---|
| 1 | `d01-strings.ts` | toUpperCase, trim, endsWith, slice, split/map/join, includes, replaceAll, repeat |
| 1 | `d01-arrays.ts` | map, filter, reduce, spread, find, some, every, Set, sort comparator, flat, non-mutating sort |
| 2 | `d02-objects.ts` | object spread, destructuring, `?.` / `??`, Object.entries/fromEntries, Map, Set, JSON.parse/stringify |
| 3 | `d03-types.ts` | predict-the-compiler: `unknown`, unions, `\| undefined`, filter narrowing, async return/throw, `Record` |

Run: `npx vitest run d01` (or `d02`, ...)

## Node (`02-node/`)
- `02-node/codealong/`: build the Namaste Node Season 2 project as you watch, in TypeScript. Has its own `package.json`; see its README for setup and the episode checklist.
- `02-node/exercises/`: apply each topic without the video. Stubs + tests only.

| # | File | After episodes | Topics |
|---|---|---|---|
| n01 | `n01-express-basics.ts` | S2 Ep 03–05 | routes, params, JSON bodies, validating `unknown` input, middleware, 404 + error handlers |

Run: `npx vitest run n01`

## Coming next
- `03-react/`: React + TypeScript (Vite `react-ts`)
- `04-llm/`: transcript → clinical note with evidence links, plus a small eval
- `dsa/`: daily problems
