const credits = 23580; //на счету пользователя
const pricePerDroid = 3000; //цена ремонтных дроидов за 1 шт
let message = prompt("Какое количество ремонтных дроидов Вы желаете купить?");
let totalPrice;

if (message === null) {
  alert((message = "Отменено пользователем!"));
} else {
  totalPrice = Number(message) * pricePerDroid;
}

if (Number(totalPrice) > credits) {
  alert((message = "Недостаточно средств на счету!"));
} else if (Number(totalPrice) <= credits) {
  alert(
    (message = `Вы купили ${message} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`)
  );
}
