const a = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(+a[1]+(a[1]-a[0]));
