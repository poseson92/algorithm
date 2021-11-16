const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

let num = input[0].split(" ");
const num1 = reverseStr(num[0]);
const num2 = reverseStr(num[1]);

function reverseStr(abc) {
  let result = "";
  for (let i = abc.length - 1; i >= 0; i--) {
    result = result + abc[i];
  }
  return result;
}

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}
