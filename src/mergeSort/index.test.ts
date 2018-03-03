import { mergeSort } from './index';

describe('mergeSort', () => {
  const UnsortedArrayOfNumber = [1, 0, -6, 3, 5, 8, -9, 3, 1, 5, 6, 8, 0, 6, 4];

  it('should sort array of number', () => {
    const sortedArray = mergeSort(UnsortedArrayOfNumber);

    expect(sortedArray).toEqual(UnsortedArrayOfNumber.sort((a, b) => a - b));
  });
});
