let n = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")
n[0] === '' ? console.log(0) : console.log(n.length);


