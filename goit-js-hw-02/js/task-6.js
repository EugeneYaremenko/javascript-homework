let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число");
  numbers.push(Number(input));
}

for (const number of numbers) {
  total += number;
}

if (total !== 0) {
  console.log(`Общая сумма чисел равна ${total}`);
}