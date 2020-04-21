const country = prompt("Здравствуйте, укажите страну доставки");
let price;

switch (country) {
  case null: {
    alert("Отменено пользователем");
    break;
  }
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
}

if (Number(price) >= 0) {
  alert(`Доставка в ${normalizedCountry} будет стоить ${price} кредитов.`);
} else {
  alert("В вашей стране доставка не доступна");
}
