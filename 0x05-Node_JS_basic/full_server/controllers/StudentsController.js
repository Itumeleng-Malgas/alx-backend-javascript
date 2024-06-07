const { readFile } = require('./utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readFile('database.csv');

      let output = 'This is the list of our students\n';

      // Sort fields alphabetically case insensitive
      const sortedFields = Object.keys(students).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      sortedFields.forEach(field => {
        const numStudents = students[field].length;
        const studentList = students[field].join(', ');
        output += `Number of students in ${field}: ${numStudents}. List: ${studentList}\n`;
      });

      res.status(200).send(output);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.query;

    // Check if major parameter is provided and valid
    if (!major || (major !== 'CS' && major !== 'SWE')) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readFile('database.csv');

      if (!students[major]) {
        return res.status(200).send(`No students found for ${major}`);
      }

      const studentList = students[major].join(', ');

      return res.status(200).send(`List: ${studentList}`);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
