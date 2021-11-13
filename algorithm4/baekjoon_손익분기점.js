const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split(" ");

const A = input[0] * 1;
const B = input[1] * 1;
const C = input[2] * 1;

const margin = C - B;
const count = Math.floor(A / margin) + 1;

console.log(margin <= 0 ? -1 : count);
