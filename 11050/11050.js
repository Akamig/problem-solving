const [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => BigInt(v));
{
  let N = BigInt(1);
  let K = BigInt(1);
  for (let a = BigInt(0); a < k; a++) {
    N *= n - a;
  }
  for (let a = BigInt(0); a < k; ++a) {
    K *= k - a;
  }
  if (k < 0 || k > n) {
    console.log(0);
  } else if (k === 0 || N === 0) {
    console.log(1);
  } else {
    console.log(`${(N / K) % BigInt(1,000,000,007)}`);
  }
}
