// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should round and return the sum of two whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and return the sum of a decimal and a whole number', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round and return the sum of two decimal numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round and return the sum of two decimal numbers (rounded up)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle zero values and return 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle negative numbers and return the correct sum', () => {
    assert.strictEqual(calculateNumber(-2.5, -3.8), -6);
  });

  it('should handle large numbers and return the correct sum', () => {
    assert.strictEqual(calculateNumber(1000000, 2000000), 3000000);
  });
});
