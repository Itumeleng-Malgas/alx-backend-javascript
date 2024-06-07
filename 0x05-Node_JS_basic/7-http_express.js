const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    readFile(fileName, 'utf8', (err, data) => {
      if (err) reject(err);

      const students = {};
      const fields = {};

      data.trim().split('\n').forEach(line => {
        if (line) {
          const [firstname, , , field] = line.split(',');

          students[field] = students[field] || [];
          students[field].push(firstname);

          fields[field] = (fields[field] || 0) + 1;
        }
      });

      const l = Object.values(fields).reduce((acc, val) => acc + val, 0);
      let output = `Number of students: ${l}\n`;

      for (const [key, value] of Object.entries(fields)) {
        output += `Number of students in ${key}: ${value}. `;
        output += `List: ${students[key].join(', ')}\n`;
      }

      resolve(output);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then(output => res.send(`This is the list of our students\n${output}`))
    .catch(() => res.send('This is the list of our students\nCannot load the database'));
});

app.listen(port);

module.exports = app;
