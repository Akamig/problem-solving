{
  const arr = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v % 42);

  const set = new Set(arr);
  console.log(set.size);
}
