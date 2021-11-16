const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split(" ");

const num = BigInt(input[0]);
const num1 = BigInt(input[1]);
let answer = num + num1;
console.log(answer.toString());
