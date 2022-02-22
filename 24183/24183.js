var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
{
  console.log(
    (input[0] * 0.148392) + (input[1] * 0.24948) + (input[2] * 0.06237)
  );
}
