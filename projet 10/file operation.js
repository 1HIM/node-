const fs = require('fs');

// Create a file named "welcome.txt"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" created.');

  // Read the file and log its content
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
  });
});
