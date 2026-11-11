import { describe, expect, it, vi } from "vitest";
import { mapParallel, retry, sleep, withTimeout } from "./ex06-async.js";

describe("sleep", () => {
  it("waits roughly the given time", async () => {
    const start = Date.now();
    await sleep(30);
    expect(Date.now() - start).toBeGreaterThanOrEqual(25);
  });
});

describe("withTimeout", () => {
  it("returns the value when fast enough", async () => {
    await expect(withTimeout(sleep(5).then(() => "note"), 100)).resolves.toBe("note");
  });
  it("rejects with 'timeout' when too slow", async () => {
    await expect(withTimeout(sleep(100), 10)).rejects.toThrow("timeout");
  });
});

describe("retry", () => {
  it("succeeds after transient failures", async () => {
    let calls = 0;
    const fn = vi.fn(async () => {
      calls++;
      if (calls < 3) throw new Error(`fail ${calls}`);
      return "ok";
    });
    await expect(retry(fn, 5)).resolves.toBe("ok");
    expect(fn).toHaveBeenCalledTimes(3);
  });
  it("rethrows the last error after all attempts", async () => {
    let calls = 0;
    const fn = vi.fn(async () => {
      calls++;
      throw new Error(`fail ${calls}`);
    });
    await expect(retry(fn, 3)).rejects.toThrow("fail 3");
    expect(fn).toHaveBeenCalledTimes(3);
  });
});

describe("mapParallel", () => {
  it("keeps input order", async () => {
    const out = await mapParallel([30, 10, 20], async (ms) => {
      await sleep(ms);
      return ms;
    });
    expect(out).toEqual([30, 10, 20]);
  });
  it("runs in parallel, not one after another", async () => {
    const start = Date.now();
    await mapParallel([40, 40, 40], (ms) => sleep(ms));
    expect(Date.now() - start).toBeLessThan(100);
  });
});
