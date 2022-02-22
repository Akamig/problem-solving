const n = require("fs").readFileSync("/dev/stdin").toString().trim();
{
  let starnum = 1;
  let star = "";
  for (let i = n; i > 0; i--) {
    star += " ".repeat(i - 1);
    star += "*".repeat(starnum);
    console.log(star);
    starnum++;
    star = ''
  }
}
