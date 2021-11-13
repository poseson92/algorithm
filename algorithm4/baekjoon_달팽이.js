const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split(" ");

const A = input[0];
const B = input[1];
const V = input[2];

console.log(Math.ceil((C = (V - B) / (A - B))));
