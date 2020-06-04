const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createIngredients = (ingredients) => {
  const ingredientsRef = document.querySelector("#ingredients");

  ingredients.forEach((ingredient, name) => {
    ingredient = document.createElement("li");
    ingredient.textContent = ingredients[name];

    return ingredientsRef.appendChild(ingredient);
  });

  return ingredientsRef;
};

console.log(createIngredients(ingredients));
