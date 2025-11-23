const fs = require('node:fs');

fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully');
});

fs.appendFile('example.txt', '\nAppended text.', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('File appended successfully');
});

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

fs.copyFile('example.txt', './testFolder/example_copy.txt', (err) => {
  if (err) {
    console.error('Error copying file:', err);
    return;
  }
  console.log('File copied successfully');
})

fs.unlink('./testFolder/example_copy.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully');
});

fs.rmdir('./testFolder',{ recursive: true }, (err) => {
  if (err) {
    console.error('Error removing directory:', err);
    return;
  }
  console.log('Directory removed successfully');
});

fs.rm('./testFolder',{ recursive: true }, (err) => {
  if (err) {
    console.error('Error removing directory:', err);
    return;
  }
  console.log('Directory removed successfully');
});