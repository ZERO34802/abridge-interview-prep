// Shared domain types used across the exercises.
// The theme is a tiny version of Abridge's product: a visit transcript
// turned into a clinical note.

export type Speaker = "clinician" | "patient";

export interface TranscriptLine {
  readonly id: number;
  speaker: Speaker;
  text: string;
  startMs: number; // when this line starts in the audio, in milliseconds
}
