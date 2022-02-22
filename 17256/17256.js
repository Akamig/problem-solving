const n = require('fs').readFileSync('/dev/stdin').toString().split(/\s+/);
console.log(n[3]-n[2], n[4]/n[1], n[5]-n[0]);