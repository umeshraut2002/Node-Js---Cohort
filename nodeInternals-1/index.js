const fs = require('fs');
fs.writeFile('./test.txt', 'hello world', () => {});

console.log({__filename, __dirname});