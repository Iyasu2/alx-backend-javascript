const fs = require('fs');

/**
 * This function reads database.
 * @param {string} filePath - database.
 * @author Iyasu Asnake <https://github.com/Iyasu2>
 */
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err); // Reject the promise with the error
      } else {
        try {
          const parsedData = JSON.parse(data);
          const studentsByField = {};

          // Assuming the data structure is an array of student objects
          parsedData.forEach((student) => {
            const { field, firstName } = student;
            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(firstName);
          });

          resolve(studentsByField); // Resolve the promise with the object
        } catch (parseError) {
          reject(parseError); // Reject if parsing the data fails
        }
      }
    });
  });
}

module.exports = { readDatabase };
