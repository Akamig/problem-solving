const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var b = 0
input.forEach(a => {
    b = parseInt(b) + parseInt(a)    
});
console.log('%i', b);