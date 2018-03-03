import { selectionSort } from './index';

describe('selectionSort', () => {
  const UnsortedArrayOfNumber = [1, 0, -6, 3, 5, 8, 9, 3, 1, 5, 6, -8, 0, 6, 4];
  const UnsortedArrayOfString = 'Sed ut perspiciatis iste natus error sit voluptatem'.split(' ');

  it('should sort array of number', () => {
    const sortedArray = selectionSort(UnsortedArrayOfNumber);

    expect(sortedArray).toEqual(UnsortedArrayOfNumber.sort((a, b) => a - b));
  });

  it('should sort array of number with custom comparator', () => {
    const comparator = (a: number, b: number) => b - a;

    const sortedArray = selectionSort(UnsortedArrayOfNumber, comparator);

    expect(sortedArray).toEqual(UnsortedArrayOfNumber.sort((a, b) => a - b).reverse());
  });

  it('should sort array of string with custom comparator', () => {
    const comparator = (a: string, b: string) => a.length - b.length;

    const sortedArray = selectionSort(UnsortedArrayOfString, comparator);

    expect(sortedArray).toEqual(UnsortedArrayOfString.sort(comparator));
  });
});
