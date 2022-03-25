let arr = require("fs").readFileSync(0, "utf8").trim().split(/\s/);
arr.shift();
let uarr = [...new Set(arr)];

uarr.sort();
uarr.sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  } else if(a.length < b.length) {
    return -1;
  }
});
console.log(uarr.toString().replaceAll(",", "\n"));
