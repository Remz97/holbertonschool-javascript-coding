const fs = require('fs');

function countStudents(argPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(argPath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.splice(0, 1);
      const students = lines.map((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        return {
          firstname, lastname, age, field,
        };
      });
      const subjects = students.reduce((acc, student) => {
        if (!acc[student.field]) {
          acc[student.field] = [];
        }
        acc[student.field].push(student.firstname);
        return acc;
      }, {});
      resolve({ students, subjects });
    });
  });
}

module.exports = countStudents;
