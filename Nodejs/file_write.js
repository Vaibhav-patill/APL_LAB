const fs = require('fs');

fs.writeFile('Nodejs/example.txt', 'Hello, this is Node.js file handling!', (err) => {
  if (err) throw err;
  console.log('File created and data written successfully!');
});
