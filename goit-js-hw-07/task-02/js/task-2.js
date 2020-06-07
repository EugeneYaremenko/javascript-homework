const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

const items = ingredients.map((e) => {
  const li = document.createElement("li");
  li.textContent = e;
  return li;
});
ingredientsRef.append(...items);
