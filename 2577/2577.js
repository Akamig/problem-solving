const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let a = (arr[0] * arr[1] * arr[2]).toString().split("");
let num = Array(10).fill(0);
a.forEach((e) => {
  e = +e;
  num[e]++;
});
console.log(`${num[0]}
${num[1]}
${num[2]}
${num[3]}
${num[4]}
${num[5]}
${num[6]}
${num[7]}
${num[8]}
${num[9]}`);
