const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = '20px';
const fn = (e) => {
    text.style.fontSize = `${e.target.value}px`
}

input.addEventListener('input',fn)