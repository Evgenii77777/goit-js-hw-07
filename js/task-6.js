const input = document.querySelector('#validation-input');

const inputNew = () => {
    if (Number(input.dataset.length) === input.value.length) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}
input.addEventListener('blur',inputNew)