# DevTinder code-along (Namaste Node, Season 2)

Build Akshay's project here **as he teaches it**, but in TypeScript. Type everything yourself; no copy-paste.

## Setup (once)
```bash
cd 02-node/codealong
npm install
```
When he installs a package, install it here too. Always match the version where it matters:
```bash
npm install express@4            # the course uses Express 4; Express 5 changed routing syntax
npm install -D @types/express@4  # TypeScript types for Express
```
Most packages need a matching `@types/...` dev dependency for TypeScript. If an import is red with "Could not find a declaration file", that's the fix.

Run the server with auto-reload: `npm run dev` (runs `src/app.ts`).

## Translating his JavaScript to TypeScript
| He writes (CommonJS) | You write (ES modules) |
|---|---|
| `const express = require("express");` | `import express from "express";` |
| `module.exports = router;` | `export default router;` |
| `const { x } = require("./utils");` | `import { x } from "./utils.js";` (note the `.js`, even for `.ts` files) |
| `(req, res) => {...}` | `(req: Request, res: Response) => {...}` with `import type { Request, Response } from "express";` |

If TypeScript slows you down too much on an episode, it's OK to write that episode in plain JS (`.js` file) and convert later. Don't let it stall the course.

## Episode checklist
| Ep | Topic | Watch | Code-along | Exercise |
|---|---|---|---|---|
| 00–02 | Intro, monolith vs microservices, HLD/LLD | 1.5x, take notes | none | none |
| 03 | Creating the Express server | ☐ | ☐ | `exercises/n01` (after Ep 05) |
| 04 | Routing & request handlers | ☐ | ☐ | `exercises/n01` |
| 05 | Middlewares & error handlers | ☐ | ☐ | `exercises/n01` |
| 06 | Database, schema & models (Mongoose) | ☐ | ☐ | next set |
| 07 | Diving into the APIs | ☐ | ☐ | next set |
| 08 | Data sanitization & schema validation | ☐ | ☐ | next set |
| 09 | Encrypting passwords | ☐ | ☐ | |
| 10 | Authentication, JWT & cookies | ☐ | ☐ | |
| 11 | APIs & Express Router | ☐ | ☐ | |
| 12 | Logical DB queries & compound indexes | ☐ | ☐ | |
| 13 | ref, populate & API thought process | ☐ | ☐ | |
| 14 | Feed API & pagination | ☐ | ☐ | |
| 15–19 | DevTinder UI (React) | only if a frontend round is confirmed | | |

Season 3 worth doing later: **Ep 05 (dotenv)** and **Ep 08–09 (WebSockets / real-time)**.

Commit after each episode: `git add -A && git commit -m "codealong: ep03 express server"`.
