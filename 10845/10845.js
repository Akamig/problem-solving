let [...ops] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .reverse();
{
  let queue = new Array();
  let e = "";
  let total_e = "";
  let push = "";

  for (let i = ops.pop(); i > 0; i--) {
    switch ((e = ops.pop())) {
      default:
        push = e.split(' ');
        queue.push(push[1]);
        break;
      case `pop`:
        e = queue.shift();
        total_e += e ? `${e}\n` : "-1\n";
        break;
      case `size`:
        total_e += `${queue.length}\n`;
        break;

      case `empty`:
        total_e += queue.length ? "0\n" : "1\n";
        break;

      case `front`:
        e = queue[0];
        total_e += e ? `${e}\n` : "-1\n";
        break;

      case `back`:
        e = queue[queue.length - 1];
        total_e += e ? `${e}\n` : "-1\n";
        break;
    }
  }
  console.log(total_e.slice(0, -1));
}
