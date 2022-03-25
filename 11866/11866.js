let [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(v=>+v);
console.log(N, K); 

console.log(solve(N, K));
console.log(fw(N,K));

function solve(n, k) {
  if (n == 1) {
    return 0;
  }
  let x = solve(n - 1, k);
  let y = (x + k) % n;
  return y;
}

function fw(n, k){
    if(k>n){k=k%n};
    return solve(n,k)+1;
}