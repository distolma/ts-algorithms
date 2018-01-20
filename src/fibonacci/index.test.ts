import { fibonacci } from "./index";

describe('fibonacci', () => {
  it('should return 1', () => {
    const result = fibonacci(1);

    expect(result).toEqual(1);
  });

  it('shold return 6765', () => {
    const result = fibonacci(20);

    expect(result).toEqual(6765);
  });
});