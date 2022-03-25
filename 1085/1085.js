const [x, y, w, h] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map((v) => +v);console.log(Math.min(Math.abs(w - x), Math.abs(h - y), Math.abs(x), Math.abs(y)));
