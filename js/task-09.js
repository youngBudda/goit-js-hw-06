function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', myFunc);

function myFunc(event) {
  body.style.backgroundColor = getRandomHexColor();
}
// body.style.backgroundColor = 'red';
