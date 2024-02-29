const chai = require('chai');
const expect = chai.expect; // Using Expect style
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  it('should perform SUM operation and return the correct result', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should perform SUBTRACT operation and return the correct result', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should perform DIVIDE operation and return the correct result', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.001);
  });

  it('should handle division by zero and return "Error"', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should handle invalid type and return "Invalid type"', () => {
    expect(calculateNumber('INVALID', 1.4, 4.5)).to.equal('Invalid type');
  });
});
