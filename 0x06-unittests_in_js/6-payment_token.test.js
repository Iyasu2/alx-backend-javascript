const { getPaymentTokenFromAPI } = require('./6-payment_token'); // Assuming this is the path to your 6-payment_token.js file
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to indicate the test is complete
      })
      .catch(done); // Call done with an error if the promise is rejected
  });
});
