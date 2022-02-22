const a = require('fs').readFileSync('/dev/stdin').toString();
let n = parseInt(a)
console.log(n *(n+1)/ 2)