const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
arr.shift();
arr.sort((a,b) => a.split(" ")[0] - b.split(" ")[0])
console.log(arr.sort((a,b) => a.split(" ")[1] - b.split(" ")[1]).toString().replaceAll(",", "\n"));
