const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split(" ");

let str = input.toString();
result = str.charCodeAt(0);

console.log(result);
