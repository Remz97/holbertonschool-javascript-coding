const fs = require('fs');

function countStudents(argPath) {
  fs.readFile(argPath, 'utf8', (error, data) => {
    if (error) {
      throw new Error('Cannot load the database');
    }
    const lines = data.split('\n');
    lines.splice(0, 1);
    console.log(`Number of students: ${lines.length}`);
    const splited = lines.map((word) => word.split(','));
    const subjects = {};
    for (let i = 0; i < splited.length; i += 1) {
      if (!subjects[splited[i][3]]) {
        subjects[splited[i][3]] = [];
      }
      subjects[splited[i][3]].push(splited[i][0]);
    }
    for (const key in subjects) {
      if (Object.prototype.hasOwnProperty.call(subjects, key)) {
        console.log(`Number of students in ${key}: ${subjects[key].length}. List: ${subjects[key].join(', ')}`);
      }
    }
  });
}

module.exports = countStudents;
