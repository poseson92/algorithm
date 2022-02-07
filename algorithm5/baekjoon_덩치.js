const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const T = input.shift();
const body = input.map((KGCM) => KGCM.split(" ").map((num) => parseInt(num)));
const rank = [];

for (let i = 0; i < T; i++) {
  let counter = 0;
  for (let j = 0; j < T; j++) {
    if (i !== j) {
      if (body[i][0] < body[j][0] && body[i][1] < body[j][1]) {
        counter++;
      }
    }
  }
  rank.push(counter + 1);
}
console.log(rank.join(" "));
