// GLOBALS - NO WINDOW !!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (commonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
console.log('-------------------------------------------------------------------------');
console.log(__filename);
console.log('-------------------------------------------------------------------------');
console.log(require);
console.log('-------------------------------------------------------------------------');
console.log(module);
console.log('-------------------------------------------------------------------------');
console.log(process);
console.log('-------------------------------------------------------------------------');

setInterval(() => {
    console.log('hello world');
}, 1000);

setTimeout(() => {
    console.log('hello world');
}, 1000);