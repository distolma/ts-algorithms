import { insertionSort } from './index';

describe('insertionSort', () => {
  const UnsortedArrayOfNumber = [1, 0, -6, 3, 5, 8, 9, 3, 1, 5, 6, -8, 0, 6, 4];
  const UnsortedArrayOfString = 'Sed ut perspiciatis iste natus error sit voluptatem'.split(' ');

  it('should sort array of number', () => {
    const sortedArray = insertionSort(UnsortedArrayOfNumber);

    expect(sortedArray).toEqual(UnsortedArrayOfNumber.sort());
  });

  it('should sort array of number with custom comparator', () => {
    const comparator = (a: number, b: number) => b - a;

    const sortedArray = insertionSort(UnsortedArrayOfNumber, comparator);

    expect(sortedArray).toEqual(UnsortedArrayOfNumber.sort().reverse());
  });

  it('should sort array of string with custom comparator', () => {
    const comparator = (a: string, b: string) => a.length - b.length;

    const sortedArray = insertionSort(UnsortedArrayOfString, comparator);

    expect(sortedArray).toEqual(UnsortedArrayOfString.sort(comparator));
  });
});
