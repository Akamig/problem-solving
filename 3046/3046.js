var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
{
    input[1] = input[1] * 2;
    input[0] = input[1] - input[0];
    console.log(input[0]);
}
