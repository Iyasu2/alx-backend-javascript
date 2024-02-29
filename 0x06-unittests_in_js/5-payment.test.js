const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment'); // Assuming this is the path to your 5-payment.js file

describe('sendPaymentRequestToApi', () => {
  let consoleStub;

  beforeEach(() => {
    // Stub console.log to capture the output
    consoleStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    // Restore the original console.log after each test
    consoleStub.restore();
  });

  it('should log the correct message for totalAmount = 100 and totalShipping = 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleStub.calledWith('The total is: 120')).to.be.true;
    expect(consoleStub.callCount).to.be.equal(1);
  });

  it('should log the correct message for totalAmount = 10 and totalShipping = 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleStub.calledWith('The total is: 20')).to.be.true;
    expect(consoleStub.callCount).to.be.equal(1);
  });
});
