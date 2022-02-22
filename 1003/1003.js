var n = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
var d = new Array(40).fill(0);
function fibo(n) {
  if (d[n] > 0) {
    return d[n];
  }
  if (n < 2) {
    return n;
  } else {
    d[n] = fibo(n - 1) + fibo(n - 2);
    return d[n];
  }
}
{
  for (i = 1; i <= n[0]; i++) {
    if (n[i] == 0) {
      console.log("1 0");
    } else if (n[i] == 1) {
      console.log("0 1");
    } else {
      console.log(fibo(n[i] - 1), fibo(n[i]));
    }
  }
}
