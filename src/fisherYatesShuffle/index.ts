/**
 * The shuffling algorithm of
 * Fisher-Yates.<br><br>
 * Time complexity: O(N).
 *
 * @example
 * var shuffle = require('path-to-algorithms/src/' +
 * 'shuffle').fisherYatesShuffle;
 * console.log(shuffle([1, 2, 3, 4, 5])); // shuffled array
 *
 * @public
 * @module fisherYatesShuffle
 * @param {Array} array Array which should be shuffled.
 * @return {Array} Shuffled array.
 */
export function fisherYatesShuffle<T>(array: T[]): T[] {
  array = [...array];
  const size = array.length;
  let randomIndex: number;
  
  for (let i = 0; i < size; i++) {
    randomIndex = Math.floor(i + Math.random() * (size - i));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}