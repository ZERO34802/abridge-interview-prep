// Exercise 2: object types, interfaces, arrays, readonly, Record, undefined
// Video sections: objects, type aliases, interfaces, arrays
// Run: npx vitest run ex02
import type { Speaker, TranscriptLine } from "./types.js";

/** Return only the lines spoken by `speaker`, in original order. */
export function linesBySpeaker(lines: TranscriptLine[], speaker: Speaker): TranscriptLine[] {
  throw new Error("TODO");
}

/**
 * Total word count per speaker. Both keys must always be present.
 *   -> { clinician: 12, patient: 7 }
 * Hint: you may reuse countWords from ex01.
 */
export function wordsPerSpeaker(lines: TranscriptLine[]): Record<Speaker, number> {
  throw new Error("TODO");
}

/**
 * Find a line by id. Return undefined if it does not exist.
 * Question to answer in NOTES.md: why is the return type `TranscriptLine | undefined`
 * and not just `TranscriptLine` (what would Java do here)?
 */
export function findLine(lines: TranscriptLine[], id: number): TranscriptLine | undefined {
  throw new Error("TODO");
}
