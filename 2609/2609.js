const [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s+/).map(e=>+e);
const gcd = function(a, b) {  
    if (!b) {  
        return a;  
    }  
    return gcd(b, a % b);  
}
let g = gcd(a,b)
console.log(`${g}\n${a*b/g}`);
