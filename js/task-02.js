const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredientsID = document.querySelector('#ingredients');

const xxx = ingredients.forEach(el => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = `${el}`;
  ingredientsID.prepend(li);
});
