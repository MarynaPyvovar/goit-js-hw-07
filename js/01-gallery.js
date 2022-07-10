import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imagesSet = createImagesMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesSet);

function createImagesMarkup(items) {
    return items
        .map(({ preview, original, description, }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
</div>`})
        .join('');
};

const link = document.querySelector('.gallery__link');
const image = document.querySelector('.gallery__image');

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    const isImage = event.target.classList.contains('gallery__image');
    if (!isImage) return;

    link.preventDefault();

    

}

console.log(gallery);
