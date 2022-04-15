const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const inputTime = input[0].split(' ').map(Number);
const hour = inputTime[0];
const minute = inputTime[1];
const cookTime = Number(input[1]);

const cookEndHour = parseInt((hour * 60 + minute + cookTime) / 60);
const cookEndMinute = parseInt((hour * 60 + minute + cookTime) % 60);

let cookHour = cookEndHour;

if (cookHour >= 24) {
  cookHour -= 24;
}

console.log(cookHour, cookEndMinute);
