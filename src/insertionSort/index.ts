function comparator(first: any, second: any): number {
  return first - second;
}

/**
 * Insertionsort algorithm.<br><br>
 * Time complexity: O(N^2).
 *
 * @example
 *
 * var sort = require('path-to-algorithms/src' +
 * '/sorting/insertion-sort').insertionSort;
 * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module insertionSort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */
export function insertionSort<T>(array: T[], cmp: (fisrt: T, second: T) => number = comparator): T[] {
  let current: T;

  for (let i = 1; i < array.length; i++) {
    current = array[i];
    let j = i - 1;

    for (j; j >= 0 && cmp(array[j], current) > 0; j--) array[j + 1] = array[j];

    array[j + 1] = current;
  }

  return array
}