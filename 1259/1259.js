let strings = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase()
  .split("\n")
  .slice(0, -1);

strings.forEach((e) => {
  console.log(e.split("").reverse().join("") == e ? "yes" : "no");
});
