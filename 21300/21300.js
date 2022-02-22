const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
var b = 0;
input.forEach(a => {
    a=a*5
    b+=a
});
console.log(b);