const n = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
const t = n[0] * 60 + n[1] - 45;
console.log(
  t < 0
    ? `${Math.floor((1440 + t) / 60)} ${Math.abs(1440 + t) % 60}`
    : `${Math.floor(t / 60)} ${t % 60}`
);
