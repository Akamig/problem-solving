var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
{
  let n = input.shift();
  if (n == 0) {
    console.log(0);
  }
  for (let i = 0; i < n; i++) {
    let powers = input[i].split(" ");
    powers[1] = parseInt(powers[1]).toString(2).split("").reverse();
    console.log(power(powers[0], powers[1]));
  }
}
function power(b, n) {
  let x = 1;
  let power = b % 10;
  for (let i = 0; i < n.length; i++) {
    if (n[i] == 1) {
      x = (x * power) % 10;
    }
    power = (power * power) % 10;
  }
  if (x === 0 && b > 0){
      return 10;
  }
  return x;
}
