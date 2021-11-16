const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

for (let num of input) {
  let nums = num.split(" ").sort((a, b) => a - b);

  const a = Number(nums.shift());
  const b = Number(nums.shift());
  const c = Number(nums.shift());

  if (a ** 2 + b ** 2 === c ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
