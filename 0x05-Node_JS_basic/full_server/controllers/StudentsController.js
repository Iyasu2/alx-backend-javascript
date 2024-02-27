// full_server/controllers/StudentsController.js

const { readDatabase } = require('../utils'); // Assuming utils.js is in the same directory

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const studentsByField = await readDatabase('path/to/database.json'); // Adjust the file path
      const fields = Object.keys(studentsByField).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      let output = 'This is the list of our students\n';
      fields.forEach((field) => {
        const numStudents = studentsByField[field].length;
        const studentList = studentsByField[field].join(', ');
        output += `Number of students in ${field}: ${numStudents}. List: ${studentList}\n`;
      });

      response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const major = request.query.major; // Assuming the major parameter is passed as a query parameter
      if (!major || !['CS', 'SWE'].includes(major.toUpperCase())) {
        response.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const studentsByField = await readDatabase('path/to/database.json'); // Adjust the file path
      const studentList = studentsByField[major] || [];

      response.status(200).send(`List: ${studentList.join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
