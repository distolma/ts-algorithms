/**
 * Sieve of Eratosthenes.
 *
 * Simple, ancient algorithm for finding all prime numbers up to given limit.
 *
 * Returns list of primes up to specified limit.
 *
 * For example, for limit 10 it should return following list of primes:
 * [2, 3, 5, 7].
 *
 * @module sieveOfEratosthenes
 * @param {Number} num - Algorithm will returns list of primes up to
 * specified limit.
 * @returns {Array} Will return list with all prime numbers up to provided.
 * limit.
 *
 * @example
 * var sieveOfEratosthenes =
 * require('path-to-algorithms/src/sieve-of-eratosthenes').sieveOfEratosthenes;
 *
 * console.log(sieveOfEratosthenes(12)); // [2, 3, 5, 7, 11]
 */
export function sieveOfEratosthenes(num: number): number[] {
  let primes: boolean[] = [];
  for (let i = 0; i <= num; i++) {
    primes[i] = true;
  }

  [primes[0], primes[1]] = [false, false];

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; j * i <= num; j++) {
      primes[i * j] = false;
    }
  }

  const result: number[] = [];

  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }

  return result;
}