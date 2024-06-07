const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  const absolutePath = path.resolve(filePath);

  try {
    const data = fs.readFileSync(absolutePath, 'utf8');
    const lines = data.trim().split('\n');

    const records = lines.slice(1).filter((line) => line.trim() !== '');

    if (records.length === 0) {
      console.log('Number of students: 0');
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

    console.log(`Number of students: ${records.length}`);

    for (const [field, students] of Object.entries(fieldMap)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
