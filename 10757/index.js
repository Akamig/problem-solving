var fs = require("fs");
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
{
  BigInt.prototype.toJSON = function() { return this.toString()  }
  let a = BigInt(input[0]);
  let b = BigInt(input[1]);
  let c = a + b
  console.log(c.toString());
}
