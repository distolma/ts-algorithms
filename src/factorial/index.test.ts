import { factorial } from "./index";

describe('factorial', () => {
  it('should return 1', () => {
    const result = factorial(0);

    expect(result).toEqual(1);
  });

  it('shold return 120', () => {
    const result = factorial(5);

    expect(result).toEqual(120);
  });
});