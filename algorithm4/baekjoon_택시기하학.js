const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const radius = Number(input);
const euclidArea = radius * radius * Math.PI;
const texiArea = radius * 2 * radius;

console.log(euclidArea.toFixed(6));
console.log(texiArea.toFixed(6));
