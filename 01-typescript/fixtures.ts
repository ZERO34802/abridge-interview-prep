import type { TranscriptLine } from "./types.js";

// A short, made-up visit transcript used by the tests.
export const visit: TranscriptLine[] = [
  { id: 1, speaker: "clinician", text: "What brings you in today?", startMs: 0 },
  { id: 2, speaker: "patient", text: "I have had a headache for three days.", startMs: 3_000 },
  { id: 3, speaker: "clinician", text: "Any nausea or vision changes?", startMs: 8_500 },
  { id: 4, speaker: "patient", text: "Some nausea in the mornings.", startMs: 12_000 },
  { id: 5, speaker: "clinician", text: "Are you taking anything for the headache?", startMs: 16_000 },
  { id: 6, speaker: "patient", text: "Ibuprofen twice a day.", startMs: 20_500 },
];
