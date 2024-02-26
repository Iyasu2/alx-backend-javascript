const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${data.students.length}\n`);
        Object.entries(data.byField).forEach(([field, students]) => {
          res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
        });
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.end();
  }
});

app.listen(1245);

module.exports = app;
