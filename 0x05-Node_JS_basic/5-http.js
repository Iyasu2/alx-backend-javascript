const http = require('http');
const fs = require('fs');

/**
 * Read the database file and store student data.
 * @param {String} databasePath The path to the CSV data file.
 * @throws {Error} Throws an error if the database cannot be loaded.
 * @returns {Array} An array of student data (filtered and cleaned).
 * @author Iyasu Asnake <https://github.com/Iyasu2>
 */
function readDatabaseFile(databasePath) {
  try {
    const data = fs.readFileSync(databasePath, 'utf8');
    const lines = data.split('\n');
    return lines.filter((line) => line.trim().length > 0 && !line.includes('firstname'));
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

/**
 * Create an HTTP server.
 * @param {String} databasePath The path to the CSV data file.
 * @returns {http.Server} The HTTP server instance.
 */
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    // Handle root path
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // Handle /students path
    const databasePath = process.argv[2]; // Get the database file path from command line arguments
    const studentData = readDatabaseFile(databasePath);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    res.write(`Number of students: ${studentData.length}\n`);

    const fields = {};
    studentData.forEach((line) => {
      const student = line.split(',');
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    });

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        res.write(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`);
      }
    }
    res.end();
  } else {
    // Handle other paths
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
