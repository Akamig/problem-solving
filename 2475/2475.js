const n = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
var b = 0;
n.forEach((a)=>{b+=a*a;});
console.log(b%10);