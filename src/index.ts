const extractKey = <K extends PropertyKey, T>(
  item: T,
  index: number,
  keySelector: keyof T | ((item: T, index: number) => K)
): K => {
  return typeof keySelector === "function"
    ? keySelector(item, index)
    : (item[keySelector] as K);
};

export const groupBy = <K extends PropertyKey, T>(
  items: Iterable<T>,
  keySelector: keyof T | ((item: T, index: number) => K)
): Partial<Record<K, T[]>> => {
  const result: Partial<Record<K, T[]>> = {};

  let index = 0;
  for (const item of items) {
    const key = extractKey(item, index, keySelector);
    result[key] ||= [];
    result[key]!.push(item);
    index++;
  }

  return result;
};
