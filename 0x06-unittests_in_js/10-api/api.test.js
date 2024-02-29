const { expect } = require('chai');
const request = require('request');

describe('Available payments endpoint', () => {
  it('returns correct payment methods', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('Login endpoint', () => {
  it('returns correct welcome message', (done) => {
    const userName = 'Betty';
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: { userName },
      },
      (error, response, body) => {
        expect(body).to.equal(`Welcome ${userName}`);
        done();
      }
    );
  });
});
