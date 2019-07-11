'use strict';

var fs = require('fs');

var data = fs.readFileSync(process.argv[2]);

var arr = data.toString().split('\n');

console.log(arr.length-1);