let input = document.querySelector('#name-input');
let output = document.querySelector('#name-output');

const inputNull = 'незнакомец';
output.textContent = inputNull;

const textInput = (e) => {
    if (e.target.value.length > 0) {
        output.textContent = e.target.value;
    }
    else {
        output.textContent = inputNull;
    }
}
 input.addEventListener('input',textInput)