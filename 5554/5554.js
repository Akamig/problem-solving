const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
var b = 0;
input.forEach((a) => {
  b = parseInt(b) + parseInt(a);
});
var c = b / 60;
console.log("%i\n%i", b / 60, b % 60);
