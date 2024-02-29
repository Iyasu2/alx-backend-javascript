const Utils = require('./utils'); // Assuming utils.js is in the same directory

/**
 * Sends a payment request to the API.
 * @param {number} totalAmount - Total amount.
 * @param {number} totalShipping - Total shipping cost.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentRequestToApi;
