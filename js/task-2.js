const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const arrIngredient = document.querySelector('#ingredients');

const newIngredients = ingredients.map(el => {
  let creator =   document.createElement('li');
    creator.textContent = el;
    return creator;
});
arrIngredient.append(...newIngredients)
console.log(arrIngredient);
