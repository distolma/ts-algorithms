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