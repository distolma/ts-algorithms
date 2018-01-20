/**
 * Factorial of a non-negative integer n
 * is the product of all positive integers less than or equal to n.
 *
 * @public
 *
 * @example
 * var factorial = require('path-to-algorithms/src/others/factorial').factorial;
 * var nth = factorial(5);
 *
 * console.log(nth); // 120
 *
 * @param {Number} num The number of factorial;
 *
 * @module fibonacci
 */
export function factorial(num: number): number {
  return num ? num * factorial(num - 1) : 1;
}