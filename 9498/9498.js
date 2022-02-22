const n = require("fs").readFileSync("/dev/stdin").toString().trim();
const a = ['F','F','F','F','F','F','D','C','B','A','A'];
{console.log(a[Math.floor(parseInt(n)/10)]);}
