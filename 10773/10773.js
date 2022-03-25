const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(v=>+v);
const stack = new Array()
arr.forEach(e=>{
    e != 0? stack.push(e) : stack.pop();
})
console.log(stack.reduce((p, c) => p + c, 0));
