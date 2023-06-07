// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const incBtn = document.querySelector(`[data-action="increment"]`);
const decBtn = document.querySelector(`[data-action="decrement"]`);
let value = document.querySelector('#value');

const inc = () => {
  counterValue++;
  value.textContent = counterValue;
};

const dec = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

incBtn.addEventListener('click', inc);
decBtn.addEventListener('click', dec);
