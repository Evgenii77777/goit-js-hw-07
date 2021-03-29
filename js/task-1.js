// a
const item = document.querySelector('#categories');
const newEl = document.querySelectorAll('li.item');

console.log(`В списке ${newEl.length} категории.`);

newEl.forEach(el => {
    console.log(el.querySelector('h2').textContent);
    console.log(el.querySelectorAll('li').length);
})
