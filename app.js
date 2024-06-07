let userNum = +prompt(`Enter your number`, 2);
let action = 0;
for (let i = 2; i < userNum; i++) {
  if (userNum % i === 0) {
    action += 1;
  }
}
if (action) {
  alert(`is not a simple`);
} else if (!action) {
  alert(`is a simple`);
}
console.log(action);
