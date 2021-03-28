const value = document.querySelector('#value');
const valuePlus = document.querySelector('[data-action="increment"]');
const valueMinus = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
 }

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}
 
valuePlus.addEventListener('click',increment)
valueMinus.addEventListener('click', decrement)
