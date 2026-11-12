// Exercise 2: object types, interfaces, arrays, readonly, Record, undefined
// Video sections: objects, type aliases, interfaces, arrays
// Run: npx vitest run ex02
import type { Speaker, TranscriptLine } from "./types.js";

/** Return only the lines spoken by `speaker`, in original order. */
export function linesBySpeaker(lines: TranscriptLine[], speaker: Speaker): TranscriptLine[] {
  const res: TranscriptLine[] = lines.filter((element)=>(element.speaker === speaker));
  return res;
}

/**
 * Total word count per speaker. Both keys must always be present.
 *   -> { clinician: 12, patient: 7 }
 * Hint: you may reuse countWords from ex01.
 */

function countWords(text: string): number {
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  return wordCount;
}

export function wordsPerSpeaker(lines: TranscriptLine[]): Record<Speaker, number> {
  const res = lines.reduce<Record<Speaker,number>>((mp,curr)=> {
    mp[curr.speaker] = (mp[curr.speaker] ?? 0) + countWords(curr.text);
    return mp;
  },{clinician:0, patient: 0});
  return res;
}

/**
 * Find a line by id. Return undefined if it does not exist.
 * Question to answer in NOTES.md: why is the return type `TranscriptLine | undefined`
 * and not just `TranscriptLine` (what would Java do here)?
 */
export function findLine(lines: TranscriptLine[], id: number): TranscriptLine | undefined {
  const res = lines.find((element) => (element.id === id));
  return res;
}
