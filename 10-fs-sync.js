
// FS module - Sync

// readFileSync() - used to read the contents of the file synchronously this means that event loop is paused until
// the read operation is complete . takes two arguments
// readFileSync('<file-path>', '<options>') 

// writeFileSync() - used to write the content into an file. If the file does not exist, node will create a new file and writes the content
//                      If the file already exists node will overwrite the previous contents of the file with the new one passed an the second argument
// writeFileSync('<file-path>', '<content-to-be-written>')

// in order to append the contents to the target file we have to pass third argument as {flag: 'a'}

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
);