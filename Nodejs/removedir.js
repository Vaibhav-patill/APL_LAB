const fs = require('fs');
const path = require('path');

 fs.rmdir('testDir', (err) => {
    if (err) throw err;
    console.log('Directory removed!');
  });