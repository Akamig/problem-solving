const y = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log((y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ? "1" : "0");