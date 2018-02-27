/**
 * Shuffle of an array elements.
 * This algorithm is modified version of Fisher-Yates shuffle
 * algorithm and is introduced by Richard Durstenfeld.<br><br>
 * Time complexity: O(N).
 *
 * @example
 * var shuffle = require('path-to-algorithms/src/shuffle').shuffle;
 * console.log(shuffle([1, 2, 3, 4, 5])); // random shuffled
 *
 * @public
 * @module shuffle
 * @param {Array} array An array which should be shuffled.
 * @return {Array} Shuffled array.
 */
export function shuffle<T>(array: T[]): T[] {
  array = [...array];
  const size = array.length - 1;
  let randomIndex: number;

  for (let i = size; i >= 0; i--) {
    randomIndex = Math.floor(Math.random() * size);
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array;
}