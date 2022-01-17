import { isPositive } from './04-main';

describe('isPositive()', () => {
  it('should return true when n > 0', () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(6)).toBe(true);
    expect(isPositive(9)).toBe(true);
  });
  it('should return false when n = 0', () => {
    expect(isPositive(0)).toBe(false);
  });
  it('should return false when n < 0', () => {
    expect(isPositive(-6)).toBe(false);
    expect(isPositive(-9)).toBe(false);
    expect(isPositive(-1)).toBe(false);
  });
});
