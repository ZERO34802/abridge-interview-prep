// Node exercise 1: Express server, routing, middleware, error handling
// Do this AFTER Season 2 Episodes 03–05. No video while solving.
// Run: npx vitest run n01
//
// You're building a tiny piece of an Abridge-like backend: look up a visit transcript
// and save a clinical note for it. Data lives in memory (no database yet).
//
// The tests call createApp() and send real HTTP requests to it (using supertest),
// so you never need to start a server or open a port.
import express from "express";

export interface Transcript {
  id: string;
  lines: string[];
}

export interface Note {
  id: string;
  transcriptId: string;
  text: string;
  wordCount: number;
}

// Pretend database tables
export const transcripts: Record<string, Transcript> = {
  t1: { id: "t1", lines: ["What brings you in today?", "I have had a headache for three days."] },
};
export const notes: Note[] = [];

export function createApp() {
  const app = express();

  // TODO 1: Parse JSON request bodies so req.body is filled in.
  //         (Which built-in middleware does this? Ep 05 / 07)

  // TODO 2: Request-ID middleware. On EVERY response, set the header "x-request-id"
  //         to a new unique id (hint: crypto.randomUUID() from "node:crypto").
  //         Don't forget to let the request continue.

  // TODO 3: GET /health  ->  200  { status: "ok" }

  // TODO 4: GET /transcripts/:id
  //         found     -> 200 with the transcript object
  //         not found -> 404 { error: "transcript not found" }

  // TODO 5: POST /notes   body: { transcriptId: string, text: string }
  //         - req.body is untrusted input: treat it as `unknown` and narrow it.
  //         - invalid shape (missing field, wrong type, empty/whitespace-only text)
  //               -> 400 { error: "invalid note" }
  //         - transcriptId doesn't exist  -> 404 { error: "transcript not found" }
  //         - otherwise: create the note (new id, wordCount of text), push it into `notes`,
  //               -> 201 with the created note
  //         Reuse your countWords logic from ex01.

  // TODO 6: GET /boom  ->  throw new Error("boom: secret internal detail")
  //         (exists only so the tests can check your error handler)

  // TODO 7: Any other route  ->  404 { error: "route not found" }
  //         (Where must this middleware go relative to the routes? Why?)

  // TODO 8: Error-handling middleware  ->  500 { error: "internal error" }
  //         Must NOT leak the real error message to the client.
  //         (How does Express know a middleware is an error handler?)

  return app;
}
