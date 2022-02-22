var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString();
{
  let a = BigInt(input[0]);
  let b = a % 20000303;
  console.log(b);
}
