function comparator(first: any, second: any): number {
  return first - second;
}

/**
 * Bubble sort algorithm.
 * Complexity: O(N^2).
 *
 * @example
 * var sort = require('path-to-algorithms/src/' +
 * 'sorting/bubblesort').bubbleSort;
 * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module bubblesort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */
export function bubbleSort<T>(array: T[], cmp: (fisrt: T, second: T) => number = comparator): T[] {
  array = [...array];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (cmp(array[j], array[j + 1]) < 0) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      };
    }
  }

  return array
}