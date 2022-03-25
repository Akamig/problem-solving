const readline = require("readline");
let reducer = (accumulator: number, curr: number) => accumulator + curr;

(async () => {
  const rl = readline.createInterface({
    input: process.stdin,
  });
  for await (const line of rl) {
    if (line === "0 0 0") {
      rl.close();
      process.exit();
    }
    let three: number[] = line.split(" ").map((v) => Math.pow(parseInt(v), 2));
    let i = Math.max(three[0], three[1], three[2]);
    three.push(i * -2);
    let four = three.reduce(reducer);
    console.log(four ? "wrong" : "right");
  }
})();
