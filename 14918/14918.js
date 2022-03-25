let [a, b] = require('fs').readFileSync(0,'utf8').trim().split(" ").map(Number);
console.log(a+b);
