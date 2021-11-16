const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const M = Number(input[0]);
const N = Number(input[1]);
let num = [];

for (let i = M; i <= N; i++) {
  num.push(i);
}

const isPrime = (x) => {
  if (x < 2) {
    return false;
  }

  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};

num.map((x) => {
  if (isPrime(x)) {
    console.log(x);
  }
});
