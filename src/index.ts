const extractKey = <K extends PropertyKey, T>(
  item: T,
  index: number,
  keySelector: keyof T | ((item: T, index: number) => K)
): K => {
  return typeof keySelector === "function"
    ? keySelector(item, index)
    : (item[keySelector] as K);
};

/**
 * Groups elements of an iterable into an object based on the selected key.
 *
 * @template K - Type of the key to group by.
 * @template T - Type of the elements in the iterable.
 * @param {Iterable<T>} items - The iterable collection of items to be grouped.
 * @param {keyof T | ((item: T, index: number) => K)} keySelector - A key or a function used to select the key for grouping.
 * @returns {Partial<Record<K, T[]>>} An object containing grouped items. Each key maps to an array of items that share that key.
 *
 * @example
 * // Grouping an array of objects by a specific property:
 * const items = [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }, { type: 'vegetable', name: 'carrot' }];
 * const grouped = groupBy(items, 'type');
 * // Result: { fruit: [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }], vegetable: [{ type: 'vegetable', name: 'carrot' }] }
 *
 * @example
 * // Grouping an array of numbers by even and odd:
 * const numbers = [1, 2, 3, 4];
 * const grouped = groupBy(numbers, (num) => (num % 2 === 0 ? 'even' : 'odd'));
 * // Result: { odd: [1, 3], even: [2, 4] }
 */
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
