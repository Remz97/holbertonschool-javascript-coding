const http = require('http');

const app = http.createServer((require, result) => {
  result.write('Hello Holberton School!');
  result.end();
});

app.listen(1245);

module.exports = app;
