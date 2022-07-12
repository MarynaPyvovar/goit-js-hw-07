import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const imagesSet = createImagesMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesSet);

function createImagesMarkup(items) {
    return items
        .map(({ preview, original, description, }) => {
        return `<li>
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`})
        .join('');
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
})
