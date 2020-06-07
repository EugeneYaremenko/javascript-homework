const categoriRef = document.querySelector("#categories");

const quantityCategories = categoriRef.children.length;

console.log(`В списке ${quantityCategories} категории.`);

const getCategoriName = [...categories.children]
.map(e => `${e.children[0].textContent}: ${e.children[1].children.length}`)
.join('\n');

console.log(getCategoriName);