let [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s+/).map(e=>+e);
let m = 0;
arr.forEach(e=>{e > m ? m = e : '';});
console.log(arr.reduce((p,c) => p+c,0)/arr.length/m*100);

