const n = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const r = n.map((e) => {
  return e.split("").reverse().join("");
});
{
  console.log(r[0] > r[1] ? r[0] : r[1]);
}