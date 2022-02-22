const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(Math.floor(((parseInt(input[0])+1)*(parseInt(input[1])+1))/(parseInt(input[2])+1)-1));