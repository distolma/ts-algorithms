/**
 * Mergesort method which is recursively called for sorting the input array.
 *
 * @public
 * @module mergesort
 * @param {Array} array The array which should be sorted.
 * @param {Function} cmp Compares two items in an array.
 * @param {Number} start Left side of the subarray.
 * @param {Number} end Right side of the subarray.
 * @returns {Array} Array with sorted subarray.
 *
 * @example
 * var array = [2, 4, 1, 5, 6, 7];
 * var mergeSort =
 *    require('path-to-algorithms/src/mergesort').mergeSort;
 * mergeSort(array); // [1, 2, 4, 5, 6, 7]
 */
export function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  const middleIndex = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1: number[], array2: number[]): number[] {
  let result: number[] = [];
  while (array1.length && array2.length) {
    let minElem: any;
    if (array1[0] < array2[0]) minElem = array1.shift();
    else minElem = array2.shift();

    result.push(minElem);
  }

  if (array1.length) result = result.concat(array1);
  else result = result.concat(array2);

  return result;
}
