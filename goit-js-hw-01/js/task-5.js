const country = prompt("Здравствуйте, укажите страну доставки");
let price;

if (country === null) {
    alert("Отменено пользователем");
  }

const normalizedCountry = country.toLowerCase();

switch (normalizedCountry) {
  case "китай": {
    price = 100;
    break;
  }

  case "чили": {
    price = 250;
    break;
  }

  case "австралия": {
    price = 170;
    break;
  }

  case "индия": {
    price = 80;
    break;
  }

  case "ямайка": {
    price = 120;
    break;
  }

  default:
    alert("В вашей стране доставка не доступна");
}

if (Number(price) >= 0) {
  alert(`Доставка в ${normalizedCountry} будет стоить ${price} кредитов.`);
}
