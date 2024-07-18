
// Path module

const path = require('path');

// path seperator
console.log(path.sep);

// join() - Used to join the arguments (multiple paths) into a  single file path
// sytax - .join(path1, path2, ...)
const filePath = path.join('/content', 'subFolder', 'sample.txt');
console.log(filePath);

// baseName() - Returns the last portion of the path
const base = path.basename(filePath);
console.log(base);

// resolve() - Returns the normalized absolute path
const absolute = path.resolve(__dirname, 'content', 'subFolder', 'sample.txt');
console.log(absolute);