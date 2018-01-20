/**
 * Fizz buzz is a group word game for children to teach them about division.
 * Players take turns to count incrementally, replacing any number divisible 
 * by three with the word "fizz", and any number divisible by five with the word "buzz".
 *
 * @public
 *
 * @example
 * var fizzBuzz = require('path-to-algorithms/src/others/fibonacci').fizzBuzz;
 *
 * console.log(fizzBuzz(10)); // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
 *
 * @param {Number} num The length of array
 *
 * @module fizzBuzz
 */
export function fizzBuzz(num: number) {
  let result: Array<number | string> = [];

  for (let i = 1; i < num; i++) {
    if (i % 15 === 0) result.push('FizzBuzz');
    else if (i % 3 === 0) result.push('Fizz');
    else if (i % 5 === 0) result.push('Buzz');
    else result.push(i);
  }
  
  return result;
}