// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (Only share minimum)


const names = require('./Modules/4-name');
const fnSayHi = require('./Modules/5-utils');
const data = require('./Modules/6-alternative-flavor');
require('./Modules/7-mind-grenade');

console.log(data);
const msg = `Hi there, I'm ${data.singleEmployee.name}. I work as a ${data.singleEmployee.role} at Accenture`;
console.log(msg);
fnSayHi(names.vinu);
fnSayHi(names.bhanu);
fnSayHi(names.sakthi);
fnSayHi(data.singleEmployee.name);
fnSayHi('Riza');