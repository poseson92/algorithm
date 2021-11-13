const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString();

let move = 1,
  block = 1;

while (block < input) {
  block += 6 * move;
  move++;
}

console.log(move);
