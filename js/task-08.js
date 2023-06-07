// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о
// том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector('.login-form');

form.addEventListener('submit', myFu);

function myFu(event) {
  event.preventDefault();

  const email = form.querySelector(`input[name="email"]`);
  const password = form.querySelector(`input[name="password"]`);

  if (email.value === '' || password.value === '') {
    alert('Все поля должны быть заполнены');
  }
  let arr = {};
  Array.from(form.elements).forEach(el => {
    if (el.nodeName === 'INPUT' && el.name) {
      arr[el.name] = el.value;
    }
  });
  console.log(arr);
}
