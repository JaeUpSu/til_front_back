const input = prompt("숫자 두게 입력");
const numbers = input.split(" "); 

const firstNumber = parseInt(numbers[0]);
const secondNumber = parseInt(numbers[1]);

const quotient = firstNumber / secondNumber;
const reminder = firstNumber % secondNumber;

console.log("입력 : " + input);
console.log("출력 : " + quotient + " " + reminder);