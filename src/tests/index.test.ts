import { describe, it, expect } from "vitest";
import { groupBy } from "../index";

describe("groupBy", () => {
  it("should group array items by property", () => {
    const items = [
      { id: 1, category: "A" },
      { id: 2, category: "B" },
      { id: 3, category: "A" },
    ];

    const result = groupBy(items, "category");
    expect(result).toEqual({
      A: [
        { id: 1, category: "A" },
        { id: 3, category: "A" },
      ],
      B: [{ id: 2, category: "B" }],
    });
  });

  it("should group items using selector function", () => {
    const items = [1, 2, 3, 4, 5];
    const result = groupBy(items, (n) => (n % 2 === 0 ? "even" : "odd"));

    expect(result).toEqual({
      even: [2, 4],
      odd: [1, 3, 5],
    });
  });

  it("should handle empty iterables", () => {
    const items: number[] = [];
    const result = groupBy(items, (n) => n.toString());
    expect(result).toEqual({});
  });

  it("should throw error for invalid keys", () => {
    const items = [{ value: {} }];
    expect(() => groupBy(items, "value")).toThrow(
      "Key must be a string, number, or symbol"
    );
  });

  it("should throw error for invalid selector", () => {
    const items = [1, 2, 3];
    expect(() => groupBy(items, null as any)).toThrow(
      "Key must be a string, number, or symbol"
    );
  });

  it("should handle symbols as keys", () => {
    const items = [{ id: 1, [Symbol.toStringTag]: "A" }];
    const result = groupBy(items, Symbol.toStringTag);
    expect(result).toEqual({ A: items });
  });

  it("should handle numbers as keys", () => {
    const items = [{ id: 1, 1: "A" }];
    const result = groupBy(items, 1);
    expect(result).toEqual({ A: items });
  });

  it("should handle empty keys", () => {
    const items = [{ id: 1, "": "A" }];
    const result = groupBy(items, "");
    expect(result).toEqual({ A: items });
  });
});
