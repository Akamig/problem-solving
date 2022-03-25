let n = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase()
  .split("");
let arr = new Array(27).fill(0);
let [l, c] = [0, 0];
n.forEach((e) => {
  let a = e.charCodeAt() - 65;
  arr[a] += 1;
  arr[a] > l ? ((l = arr[a]), (c = e)) : "";
});
arr[c.charCodeAt() - 65] = 0;
console.log(arr.some((e) => {return e == l})? '?' : c);
