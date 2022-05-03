const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();
const num = input.map((el) => el.split(' ').map((x) => +x));

num.forEach((A) => {
  if (A[1] % A[0] == 0) {
    console.log('factor');
  } else if (A[0] % A[1] == 0) {
    console.log('multiple');
  } else {
    console.log('neither');
  }
});
