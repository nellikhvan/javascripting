'use strict';

var fs = require('fs');

var data = fs.readFileSync(process.argv[2]);
data = data.toString();

var arr = data.split('\n');

console.log(arr.length-1);