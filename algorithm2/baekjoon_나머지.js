let fs = require('fs');
const filepath = process.platform === "linux"? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filepath).toString().split('\n');

const userNum = [];

input.forEach(x => {
     const num = x % 42;
    
    if (userNum.indexOf(num) === -1) {
        userNum.push(num);
    }
});
console.log(userNum.length);