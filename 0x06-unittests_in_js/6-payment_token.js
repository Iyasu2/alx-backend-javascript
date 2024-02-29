// Create a new function named getPaymentTokenFromAPI
function getPaymentTokenFromAPI(success) {
  if (success) {
    // Return a resolved promise with the specified data
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    // Return an empty promise (no data)
    return Promise.resolve();
  }
}

module.exports = {
  getPaymentTokenFromAPI,
};
