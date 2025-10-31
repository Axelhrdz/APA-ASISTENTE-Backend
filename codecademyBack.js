// let initialMemory = process.memoryUsage().heapUsed;
// // console.log(initialMemory);

// let wordFromNode = process.argv[2];
// console.log(wordFromNode);

// // console.log(process.memoryUsage());


//old way deprecated
// const os = require('os');

//ES JS way
import os from 'os';
// import util from 'util';
import types from 'util/types';

// console.log(util);
// console.log(os.uptime());


//checking date
const today = new Date();
const earthDay = 'April 22, 2022';

console.log(today);

console.log(types.isDate(today));
console.log(types.isDate(earthDay));