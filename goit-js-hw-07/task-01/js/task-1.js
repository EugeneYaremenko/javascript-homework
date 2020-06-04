const categoriRef = document.querySelector("#categories");

const quantityCategories = categoriRef.children.length;

console.log(`В списке ${quantityCategories} категории.`);

const categoriNameRef = document.querySelectorAll(".item");

const itemsNameRef = document.querySelectorAll(".item ul");

categoriNameRef.forEach((link) =>
  console.log(`Категория: ${link.firstElementChild.textContent}`)
);

itemsNameRef.forEach((link) =>
  console.log(`Количество элементов: ${link.children.length}`)
);
