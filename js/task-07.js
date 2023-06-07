// Напиши скрипт, который реагирует на изменение значения input#font - size - control
//     (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
//     В результате при перетаскивании ползунка будет меняться размер текста.

const inputControl = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

console.log(inputControl.value);

inputControl.addEventListener('input', () => {
  span.style.fontSize = inputControl.value + 'px';
});
