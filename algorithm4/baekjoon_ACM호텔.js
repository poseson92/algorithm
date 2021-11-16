const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split("\n");

let num = input[0];

let hotel = input.splice(1);

let floor = 0;
let RoomNum = 0;

for (let i = 0; i < num; i++) {
  let [h, w, n] = hotel[i].split(" ");
  if (n % h === 0) {
    floor = h * 100;
    RoomNum = n / h;
  } else {
    floor = (n % h) * 100;
    RoomNum = n / h + 1;
  }
  console.log(Math.floor(floor + RoomNum));
}
