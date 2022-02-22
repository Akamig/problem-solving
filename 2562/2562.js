const n = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => {
    return parseInt(e);
  });
{
  var t = new Array(0, 0);
  n.forEach((e, i) => {
    t[0] > e ? "" : (t = [e, i+1]);
  });
  console.log(`${t[0]}\n${t[1]}`);
}
