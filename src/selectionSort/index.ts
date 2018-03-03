function comparator(first: any, second: any): number {
  return first - second;
}

/**
 * Selection sort.<br><br>
 * Time complexity: O(N^2).
 *
 * @example
 *
 * var sort = require('path-to-algorithms/src/sorting/'+
 * 'selectionsort').selectionSort;
 * console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
 *
 * @public
 * @module selectionSort
 * @param {Array} array Input array.
 * @param {Function} cmp Optional. A function that defines an
 * alternative sort order. The function should return a negative,
 * zero, or positive value, depending on the arguments.
 * @return {Array} Sorted array.
 */
export function selectionSort<T>(array: T[], cmp: (fisrt: T, second: T) => number = comparator): T[] {
  array = [...array];
  const size = array.length;
  let min: number;

  for (let i = 0; i < size; i++) {
    min = i;

    for (let j = i + 1; j < size; j++) {
      if (cmp(array[min], array[j]) > 0) min = j;
    }

    [array[i], array[min]] = [array[min], array[i]];
  }

  return array;
}
