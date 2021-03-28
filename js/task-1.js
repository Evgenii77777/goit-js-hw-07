// a
const category = document.querySelector('#categories');
const item = category.children;
console.log(`В списке ${item.length} категории.`);

// b
const animal = document.querySelector('h2');
console.log(`Категория: ${animal.textContent}`);

// c
const newCategory = animal.nextElementSibling;
const allCategory = newCategory.children
console.log(`Количество элементов:${allCategory.length}`)
