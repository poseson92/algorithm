const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const day = input[0];
const car = input[1].split(' ');

const result = car.filter((el) => el === day).length;

console.log(result);
