const arr = require("fs").readFileSync(0, "utf8").trim().split("\n");
arr.shift();

arr.forEach((e) => {
  let cnt = new Array(50).fill(0);
  let valid = 1;
  const counts = {};
  let ps = e.split("");

  for (x of ps) {
    if (x == "(") {
      if (cnt.push(1) <= 50) {
        console.log("NO");
        return false;
      }
    } else if (x == ")") {
      cnt.pop();
      if (cnt.length < 50) {
        console.log("NO");
        return false;
      }
    }
    counts[x] = (counts[x] || 0) + 1;
  }
  if (counts["("] != counts[")"]) {
    console.log("NO");
    return false;
  }
  if (valid == 0 || cnt.length != 50) {
    console.log("NO");
  }
  if (cnt.length == 50 && valid == 1) {
    console.log("YES");
  }
});
