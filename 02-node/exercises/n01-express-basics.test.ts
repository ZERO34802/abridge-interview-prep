import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp, notes } from "./n01-express-basics.js";

describe("n01 express basics", () => {
  beforeEach(() => {
    notes.length = 0;
  });

  it("GET /health returns ok", async () => {
    const res = await request(createApp()).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  it("every response gets a unique x-request-id", async () => {
    const app = createApp();
    const a = await request(app).get("/health");
    const b = await request(app).get("/does-not-exist");
    expect(a.headers["x-request-id"]).toBeTruthy();
    expect(b.headers["x-request-id"]).toBeTruthy();
    expect(a.headers["x-request-id"]).not.toBe(b.headers["x-request-id"]);
  });

  it("GET /transcripts/:id returns the transcript or 404", async () => {
    const app = createApp();
    const ok = await request(app).get("/transcripts/t1");
    expect(ok.status).toBe(200);
    expect(ok.body.id).toBe("t1");
    const missing = await request(app).get("/transcripts/nope");
    expect(missing.status).toBe(404);
    expect(missing.body).toEqual({ error: "transcript not found" });
  });

  it("POST /notes creates a note", async () => {
    const res = await request(createApp())
      .post("/notes")
      .send({ transcriptId: "t1", text: "Headache for three days, no nausea." });
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({ transcriptId: "t1", text: "Headache for three days, no nausea.", wordCount: 6 });
    expect(typeof res.body.id).toBe("string");
    expect(notes).toHaveLength(1);
  });

  it("POST /notes rejects invalid bodies with 400", async () => {
    const app = createApp();
    for (const body of [{}, { transcriptId: "t1" }, { transcriptId: "t1", text: 42 }, { transcriptId: 1, text: "x" }, { transcriptId: "t1", text: "   " }]) {
      const res = await request(app).post("/notes").send(body);
      expect(res.status, JSON.stringify(body)).toBe(400);
      expect(res.body).toEqual({ error: "invalid note" });
    }
    expect(notes).toHaveLength(0);
  });

  it("POST /notes returns 404 for an unknown transcript", async () => {
    const res = await request(createApp()).post("/notes").send({ transcriptId: "nope", text: "hi" });
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: "transcript not found" });
  });

  it("unknown routes return 404 JSON", async () => {
    const res = await request(createApp()).get("/not/a/route");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: "route not found" });
  });

  it("errors become a 500 without leaking details", async () => {
    const res = await request(createApp()).get("/boom");
    expect(res.status).toBe(500);
    expect(res.body).toEqual({ error: "internal error" });
    expect(JSON.stringify(res.body)).not.toContain("secret");
  });
});
