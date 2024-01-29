const fs = require('fs');

fs.cp('c:/Users/37529/nod', 'c:/Users/37529/copy_nod', { recursive: true }, (err) => {
  if (err) {
    console.error(err);
  }
});