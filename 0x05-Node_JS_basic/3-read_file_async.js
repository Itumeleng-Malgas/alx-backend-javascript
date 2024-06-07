const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    // Ensure the path is absolute
    const absolutePath = path.resolve(filePath);

    fs.readFile(absolutePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');

      const records = lines.slice(1).filter((line) => line.trim() !== '');

      if (records.length === 0) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      const fieldMap = {};

      records.forEach((record) => {
        // eslint-disable-next-line no-unused-vars
        const [firstname, lastname, age, field] = record.split(',');

        if (!fieldMap[field]) {
          fieldMap[field] = [];
        }
        fieldMap[field].push(firstname);
      });

      let output = `Number of students: ${records.length}\n`;
      for (const [field, students] of Object.entries(fieldMap)) {
        output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }
      
      console.log(output);
      resolve(output);
    });
  });
}

module.exports = countStudents;
