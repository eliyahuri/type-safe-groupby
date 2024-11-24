const extractKey = <K extends PropertyKey, T>(
  item: T,
  index: number,
  keySelector: keyof T | ((item: T, index: number) => K)
): K => {
  return typeof keySelector === "function"
    ? keySelector(item, index)
    : (item[keySelector] as unknown as K);
};

export function groupBy<
  K extends PropertyKey,
  T,
  KeySelector extends keyof T | ((item: T, index: number) => K)
>(
  items: Iterable<T>,
  keySelector: KeySelector extends keyof T
    ? T[KeySelector] extends PropertyKey
      ? KeySelector
      : never
    : KeySelector
): Partial<Record<K, T[]>> {
  const result: Partial<Record<K, T[]>> = {};

  let index = 0;
  for (const item of items) {
    const key = extractKey(item, index, keySelector);

    if (
      typeof key !== "string" &&
      typeof key !== "number" &&
      typeof key !== "symbol"
    ) {
      throw new Error("Key must be a string, number, or symbol");
    }
    result[key] ||= [];
    result[key]!.push(item);
    index++;
  }

  return result;
}
