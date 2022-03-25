let fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().split("\n");
let ptr = 1;
for (let i = 0; i < arr[0]; i++) {
  let a = new Set();
  let cnt = +arr[ptr] + ptr;
  ptr += 1;
  for (let k = ptr; k <= cnt; k++) {
    a.add(arr[ptr]);
    ptr++;
  }
  console.log(a.size);
}
