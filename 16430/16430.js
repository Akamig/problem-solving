const inp = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(`%i %i`, inp[1]-inp[0], inp[1]);