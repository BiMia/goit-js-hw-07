import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGalleryMarkup(items) {
    return items.map(item => `
        <li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
            </a>
        </li>
    `).join("");
}

const galleryMarkup = createGalleryMarkup(galleryItems);
document.querySelector('.gallery').innerHTML = galleryMarkup;

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'
});

console.log(galleryItems);
