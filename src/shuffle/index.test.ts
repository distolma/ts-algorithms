import { shuffle } from './index';

describe('shuffle', () => {
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const stringArray = 'Sed ut perspiciatis iste natus error sit voluptatem'.split(' ');

  it('should return shuffeled array of numbers', () => {
    const reducer = (acc: number, curr: number) => acc + curr;

    const result = shuffle(numberArray);

    expect(result).not.toBe(numberArray);
    expect(result.length).toEqual(numberArray.length);
    expect(result.reduce(reducer, 0)).toEqual(numberArray.reduce(reducer, 0));
  });

  it('should return shuffeled array of strings', () => {
    const result = shuffle(stringArray);

    expect(result).not.toBe(stringArray);
    expect(result.length).toEqual(stringArray.length);
  });
});
