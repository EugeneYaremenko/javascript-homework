let total = 0;

while (true) {
  let message = prompt("Введите число");

  if (message === null) {
    alert("Отменено пользователем");
    break; 
  }

  message = Number(message);

  const notANumber = Number.isNaN(message);

  if (notANumber) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  total += message;
}

alert(`Общая сумма чисел равна ${total}`);
