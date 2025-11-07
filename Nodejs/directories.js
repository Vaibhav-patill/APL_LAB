// directories.js
const fs = require('fs');

// Create directory
fs.mkdir('testDir', (err) => {
  if (err) throw err;
  console.log('Directory created!');
 
});
