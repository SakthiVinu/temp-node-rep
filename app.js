
// npm - node package manager
// npm  - global command, comes with node
// npm --version : to know the version of the npm installed

// local dependancy - use it only in this particular project
// npm i <package-name>

// global dependancy - use it in any project
// npm install -g <package-name>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip) 
// npm init -y (everything defualt) 

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);