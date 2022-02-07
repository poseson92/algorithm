const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const num = parseInt(input[0]);

for (let i = 1; i <= num; i++) {
  const [x1, y1, r1, x2, y2, r2] = input[i]
    .split(" ")
    .map((el) => parseInt(el));
  const p1 = { x: x1, y: y1 };
  const p2 = { x: x2, y: y2 };
  const Distance = getDistance(p1, p2);
  console.log(count(Distance, r1, r2));
}

function getDistance(p1, p2) {
  return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
}

function count(d, r1, r2) {
  const sum = (r1 + r2) ** 2;
  const min = (r1 - r2) ** 2;
  if (d == 0) {
    // 원점이 같을 때
    if (r1 == r2) return -1;
    return 0;
  } else {
    if (d > sum || d < min) {
      // Case4 : 0개일때
      return 0;
    } else if (d == min || d == sum) {
      // case 1,2: 1개일때(내접 또는 외접)
      return 1;
    } else if (d < sum) {
      // case 3: 2개일떄
      return 2;
    }
  }
}
