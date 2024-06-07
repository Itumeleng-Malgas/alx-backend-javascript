const { readFile } = require('fs');

module.exports = function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (err, data) => {
      if (err) reject(err);

      const students = {};

      data.trim().split('\n').forEach(line => {
        if (line) {
          const [firstname, , , field] = line.split(',');

          students[field] = students[field] || [];
          students[field].push(firstname);
        }
      });

      resolve(students);
    });
  });
};
