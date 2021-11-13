let fs = require('fs');
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split('\n');

let multiply = 1;
for (let i = 0; i < 3; i++) {
  multiply *= Number(input[i]);
}
let multiStr = String(multiply);

let countNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < 10; i++) {
  countNum[Number(multiStr[i])] += 1;
}

countNum.forEach(function(cur) {
  console.log(cur);
});