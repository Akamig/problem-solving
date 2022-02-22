var al = Array(26).fill(101);
const y = require("fs").readFileSync("/dev/stdin").toString().trim().split("");
y.forEach((e, i) => {
  let a = e.toLowerCase().charCodeAt() - 97;
  al[a] > i ? (al[a] = i) : "";
});
console.log(al.toString().replaceAll(",", " ").replaceAll("101", "-1"));
