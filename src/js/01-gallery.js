import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = galleryItems.map(item => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img 
      class="gallery__image" 
      src="${item.preview}" 
      data-source="${item.original}" 
      alt="${item.description}" />
    </a>
  </li>
`).join("");

galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryContainer.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  const source = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `);
  event.preventDefault();
  instance.show();
});

galleryContainer.addEventListener('keyup', event => {
    if(event.code === 'Escape' && basicLightbox.visible()) {
        instance.close();
    }
});

console.log(galleryItems);
