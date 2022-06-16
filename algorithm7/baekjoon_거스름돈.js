const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

let number = 1000 - input;

let exchange = 0;

while (number >= 500) {
  number -= 500;
  exchange++;
}
while (number >= 100) {
  number -= 100;
  exchange++;
}
while (number >= 50) {
  number -= 50;
  exchange++;
}
while (number >= 10) {
  number -= 10;
  exchange++;
}
while (number >= 5) {
  number -= 5;
  exchange++;
}
while (number >= 1) {
  number -= 1;
  exchange++;
}

console.log(exchange);
