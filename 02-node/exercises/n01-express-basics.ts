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
import crypto from "crypto";
import { ErrorRequestHandler } from "express";
import { error } from "console";

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
  "t1": { id: "t1", lines: ["What brings you in today?", "I have had a headache for three days."] },
};
export const notes: Note[] = [];

export function createApp() {
  const app = express();

  app.use(express.json());

  // TODO 2: Request-ID middleware. On EVERY response, set the header "x-request-id"
  //         to a new unique id (hint: crypto.randomUUID() from "node:crypto").
  //         Don't forget to let the request continue.
  app.use("/",(req,res,next) => {
    res.setHeader("x-request-id",String(crypto.randomUUID()));
    next();
  })

  // TODO 3: GET /health  ->  200  { status: "ok" }
  app.get("/health",(req,res) => {
    res.status(200).json({ status : "ok" });
  })

  // TODO 4: GET /transcripts/:id
  //         found     -> 200 with the transcript object
  //         not found -> 404 { error: "transcript not found" }
  app.get("/transcripts/:id",(req,res) => {
    const requestId = req.params.id;
    if(requestId in transcripts) {
      res.status(200).send(transcripts[requestId]);
    }else {
      res.status(404).json({ error: "transcript not found" });
    }
  });

  // TODO 5: POST /notes   body: { transcriptId: string, text: string }
  //         - req.body is untrusted input: treat it as `unknown` and narrow it.
  //         - invalid shape (missing field, wrong type, empty/whitespace-only text)
  //               -> 400 { error: "invalid note" }
  //         - transcriptId doesn't exist  -> 404 { error: "transcript not found" }
  //         - otherwise: create the note (new id, wordCount of text), push it into `notes`,
  //               -> 201 with the created note
  //         Reuse your countWords logic from ex01.

  function isValidBody(reqBody: unknown): reqBody is { transcriptId: string, text: string} {
      if(reqBody !== undefined && reqBody !== null && typeof reqBody === "object") {
        if("transcriptId" in reqBody && reqBody["transcriptId"] !== null && typeof reqBody["transcriptId"] === "string"
          && "text" in reqBody && reqBody["text"] !== null && typeof reqBody["text"] === "string"
        ) {
            const newTranscriptId = reqBody["transcriptId"].trim();
            const newText = reqBody["text"].trim();
            if(newTranscriptId.length !== 0 && newText.length !== 0) {
              return true;
            }
        }
      }
      return false;
  }

  app.post("/notes",(req,res) => {
    const reqBody: unknown = req.body;
    if(isValidBody(reqBody)) {
      const transcriptId = reqBody["transcriptId"];
      const text = reqBody.text;
      if (transcriptId in transcripts) {
        const newId = String(crypto.randomUUID());
        const newNote:Note = {
          id: newId,
          transcriptId: transcriptId,
          text: text,
          wordCount: text.split(/\s+/).length
        }
        notes.push(newNote);
        res.status(201).json(newNote);
      }else {
        res.status(404).json({ error : "transcript not found" });
      }
    }else {
      res.status(400).json({ error : "invalid note" });
    }
  })

  // TODO 6: GET /boom  ->  throw new Error("boom: secret internal detail")
  //         (exists only so the tests can check your error handler)
  app.get("/boom",(req,res)=>{
    throw new Error("boom: secret internal detail");
  }); 

  // TODO 7: Any other route  ->  404 { error: "route not found" }
  //         (Where must this middleware go relative to the routes? Why?)
  app.use("/",(req,res) => {
    res.status(404).json({ error: "route not found" });
  })

  // TODO 8: Error-handling middleware  ->  500 { error: "internal error" }
  //         Must NOT leak the real error message to the client.
  //         (How does Express know a middleware is an error handler?)
  const errorHandler : ErrorRequestHandler = (err, req, res, next) => {
    if(err) {
      res.status(500).json({ error: "internal error" });
    }
  }

  app.use("/",errorHandler);

  return app;
}
