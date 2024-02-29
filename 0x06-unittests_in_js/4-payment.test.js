const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment'); // Assuming this is the path to your 3-payment.js file
const Utils = require('./utils'); // Assuming this is the path to your utils.js file

describe('sendPaymentRequestToApi', () => {
  let stub;
  let consoleStub;

  beforeEach(() => {
    // Stub the calculateNumber function to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Stub console.log to capture the output
    consoleStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    // Restore the original functions after each test
    stub.restore();
    consoleStub.restore();
  });

  it('should call calculateNumber with SUM type and correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.callCount).to.be.equal(1);
  });

  it('should log the correct message in the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleStub.calledWith('The total is: 10')).to.be.true;
  });
});
