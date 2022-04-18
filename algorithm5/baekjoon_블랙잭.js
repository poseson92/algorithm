const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const firstNum = input[0].split(' ');
const secondNum = input[1].split(' ').map((el) => parseInt(el));

const N = parseInt(firstNum.shift());
const M = parseInt(firstNum.shift());

let num = 0;

//3장의 카드를 골라야 하기 때문에 i, j, k 3개의 index를 써서 for loop을 돈다
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      // 동일한 카드를 선택 할 수는 없기 때문에 아래 조건의 경우 다음 loop로 넘어간다.
      if (i == j || i == k || j == k) {
        continue;
      }
      // 서로 다른 카드가 선택된 경우 M을 초과하지 않는 최대값인지 확인 후 저장한다.
      const sum = secondNum[i] + secondNum[j] + secondNum[k];
      if (sum > num && sum <= M) {
        num = sum;
      }
      // 규칙에 맞는 숫자가 나온 경우에 더이상 계산을 할 필요가 없기 떄문에 종료한다.
      if (num == M) {
        break;
      }
    }
  }
}

console.log(num);
