
const fs = require('fs');

fs.open('Nodejs/example.txt', 'r', (err, fd) => {
  if (err) throw err;
  console.log('File opened successfully!',fd);
});
