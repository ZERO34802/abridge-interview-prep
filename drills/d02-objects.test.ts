import { describe, expect, it } from "vitest";
import {
  countWithMap,
  dropUndefined,
  emailOf,
  indexById,
  label,
  mergeSettings,
  pretty,
  renamePatient,
  safeParse,
  sharesAny,
  toQueryString,
  type Patient,
} from "./d02-objects.js";

const ana: Patient = { id: "p1", name: "Ana", age: 40, contact: { email: "ana@example.com" } };
const bo: Patient = { id: "p2", name: "Bo" };

describe("d02 objects", () => {
  it("renamePatient returns a new object", () => {
    const out = renamePatient(ana, "Anna");
    expect(out.name).toBe("Anna");
    expect(out.id).toBe("p1");
    expect(ana.name).toBe("Ana");
    expect(out).not.toBe(ana);
  });
  it("label", () => {
    expect(label(ana)).toBe("Ana (40)");
    expect(label(bo)).toBe("Bo (age unknown)");
  });
  it("emailOf", () => {
    expect(emailOf(ana)).toBe("ana@example.com");
    expect(emailOf(bo)).toBe("no email");
    expect(emailOf({ id: "p3", name: "Cy", contact: {} })).toBe("no email");
  });
  it("toQueryString", () => {
    expect(toQueryString({ a: 1, b: "x" })).toBe("a=1&b=x");
    expect(toQueryString({})).toBe("");
  });
  it("dropUndefined", () => {
    expect(dropUndefined({ a: 1, b: undefined, c: 3 })).toEqual({ a: 1, c: 3 });
    expect("b" in dropUndefined({ a: 1, b: undefined })).toBe(false);
  });
  it("mergeSettings: overrides win, inputs untouched", () => {
    const defaults = { model: "a", temp: 0 };
    expect(mergeSettings(defaults, { temp: 0.7 })).toEqual({ model: "a", temp: 0.7 });
    expect(defaults).toEqual({ model: "a", temp: 0 });
  });
  it("indexById", () => {
    const m = indexById([ana, bo]);
    expect(m.get("p2")?.name).toBe("Bo");
    expect(m.size).toBe(2);
  });
  it("countWithMap", () => {
    const m = countWithMap(["pain", "fever", "pain", "constructor"]);
    expect(m.get("pain")).toBe(2);
    expect(m.get("fever")).toBe(1);
    expect(m.get("constructor")).toBe(1);
  });
  it("sharesAny", () => {
    expect(sharesAny(["a", "b"], ["c", "b"])).toBe(true);
    expect(sharesAny(["a"], ["c"])).toBe(false);
  });
  it("safeParse", () => {
    expect(safeParse('{"ok":true}')).toEqual({ ok: true });
    expect(safeParse("not json")).toBeNull();
  });
  it("pretty", () => {
    expect(pretty({ a: 1 })).toBe('{\n  "a": 1\n}');
  });
});
