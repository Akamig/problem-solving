var [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/);
{
  var t = new Array(-1000000, 1000000);
  arr.forEach((a) => {
    e = parseInt(a)
    t[0] <= e ? t[0] = e : '';  
    t[1] >= e ? t[1] = e : '';
  });
  console.log(t[1], t[0]);
}
