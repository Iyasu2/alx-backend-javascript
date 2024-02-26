const fs = require('fs').promises;

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Iyasu Asnake <https://github.com/Iyasu2>
 */
function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      let lines = data.split('\n');
      lines = lines.filter((line) => line.length > 0 && !line.includes('firstname')); // Remove empty lines and header

      console.log(`Number of students: ${lines.length}`);

      const fields = {};
      lines.forEach((line) => {
        const student = line.split(',');
        const field = student[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      });

      for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
