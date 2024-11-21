const extractKey = <K extends PropertyKey, T>(
  item: T,
  index: number,
  keySelector: keyof T | ((item: T, index: number) => K)
): K => {
  return typeof keySelector === "function"
    ? keySelector(item, index)
    : (item[keySelector] as unknown as K);
};

export function groupBy<K extends keyof T & PropertyKey, T>(
  items: Iterable<T>,
  keySelector: K
): Partial<Record<T[K] & PropertyKey, T[]>>;

export function groupBy<K extends PropertyKey, T>(
  items: Iterable<T>,
  keySelector: (item: T, index: number) => K
): Partial<Record<K, T[]>>;

export function groupBy<K extends PropertyKey, T>(
  items: Iterable<T>,
  keySelector: keyof T | ((item: T, index: number) => K)
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
