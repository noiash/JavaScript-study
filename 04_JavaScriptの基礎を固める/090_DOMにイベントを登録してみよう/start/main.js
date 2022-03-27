const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

function changeColor() {
  h1.style.color = 'red';
  console.log(this);
};

function changeBgColor() {
  h1.style.backgroundColor = 'green';
};

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);

// btn.onclick = changeColor;
// btn.onclick = changeBgColor;
// btn.removeEventListener('click', changeBgColor);