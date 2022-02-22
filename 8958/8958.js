const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
{
  arr.forEach((e) => {
    let str = e.split("");
    let cul = 0;
    let count = 0;
    while (typeof (chr = str.shift()) !== "undefined") {
      chr == "O" ? (cul += 1) : (cul = 0);
      count += cul;
    }
    console.log(count);
    return count;
  });
}
