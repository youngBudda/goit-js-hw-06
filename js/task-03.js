const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul ul class="gallery" ></ul >

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const gallery = document.querySelector('.gallery');

const htmlText = images.map(
  el => `<li><img src=${el.url} alt="${el.alt}"></li>`
);

gallery.insertAdjacentHTML('afterbegin', htmlText);

const galleryImg = document.querySelectorAll('.gallery img');

galleryImg.forEach(el => {
  el.classList.add('img-class');
});

gallery.style.display = 'flex';
gallery.style.gap = '1rem';

const imgClass = document.querySelectorAll('.gallery img.img-class');
imgClass.forEach(el => {
  el.style.width = '100px';
  el.style.height = '100px';
});
