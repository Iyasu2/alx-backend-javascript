/**
 * Create a new function named getPaymentTokenFromAPI.
 * @param {boolean} success - Indicates whether the API call was successful.
 * @returns {Promise<{ data: string } | void>} - A promise that resolves with the API response data (if successful) or an empty promise (if unsuccessful).
 */
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
