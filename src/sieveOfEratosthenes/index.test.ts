import { sieveOfEratosthenes } from './index';

describe('sieveOfEratosthenes', () => {
  it('should return array of numbers', () => {
    const expectedResult = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

    const result = sieveOfEratosthenes(30);

    expect(result).toEqual(expectedResult);
  });
});
