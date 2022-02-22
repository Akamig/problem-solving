const n = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((e) => {
    return parseInt(e);
  });
{
  let ans = n[0] > n[1] ? ">" : n[0] < n[1] ? "<" : "==";
  console.log(ans);
}
