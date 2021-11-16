const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const num = parseInt(input[0]);
let num1 = 1;

for (let i = 1; i <= num; i++) {
  num1 *= i;
}
console.log(num1);
