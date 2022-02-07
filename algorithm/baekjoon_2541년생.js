const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim();

const year = input - 543;

console.log(year);
