const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
arr.shift();
console.log(arr.sort((a,b) => a.split(" ")[0] - b.split(" ")[0]).toString().replaceAll(",", "\n"));
