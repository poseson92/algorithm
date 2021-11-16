const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = Number(input[0]);
let num1 = Number(input[1]);
let result = [];
let sum = 0;

for (let i = num; i <= num1; i++) {
  for (let j = 2; j <= i; j++) {
    if (j * j > i) {
      result.push(i);
      sum += i;
      break;
    }
    if (i % j === 0) {
      break;
    }
  }
}
if (result.length === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(result[0]);
}
