/**
 * Performs various calculations based on the provided type.
 * @param {string} type - Type of calculation (SUM, SUBTRACT, or DIVIDE).
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number|string} - Result of the specified calculation or 'Error'.
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    default:
      return 'Invalid type';
  }
}

module.exports = calculateNumber;
