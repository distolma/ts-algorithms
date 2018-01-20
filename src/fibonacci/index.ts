/**
 * Nth number of fibonacci's sequence
 *
 * Returns the nth number of fibonacci's sequence.
 *
 * @public
 *
 * @example
 * var fibonacci = require('path-to-algorithms/src/others/fibonacci').fibonacci;
 * var nth = fibonacci(20);
 *
 * console.log(nth); // 6765
 *
 * @param {Number} num The nth position in fibonacci's sequence
 *
 * @module fibonacci
 */

const cache: number[] = [];

export function fibonacci(num: number): number {
  if (cache[num]) return cache[num];
  else {
    if (num < 3) return 1;
    else cache[num] = fibonacci(num - 1) + fibonacci(num - 2);
  }
  return cache[num];
}
