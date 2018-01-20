import { fizzBuzz } from "./index";

describe('fibonacci', () => {
  const fizzBuzzArray = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];

  it('should return fizzBuzz array', () => {
    const result = fizzBuzz(16);

    expect(result).toEqual(fizzBuzzArray);
  });
});