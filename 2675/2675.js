const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
arr.forEach((e) => {
  let [cat, i] = ['', ''];
  let [num, str] = e.split(" ");
  num = +num;
  str = str.split("");
  while (typeof (i = str.shift()) !== "undefined") {
    cat += i.repeat(num);
  }
  console.log(cat);
});
