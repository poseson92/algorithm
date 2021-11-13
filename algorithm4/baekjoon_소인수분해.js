const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let num = Number(input[0]);
let i = 2;
let primes = [];

while (true) {
  if (num % i === 0) {
    num = num / i;
    primes.push(i);
    i = 1;
  }
  i++;
  if (i > num) {
    break;
  }
}

console.log(primes.join("\n"));
