import { galleryItems } from './gallery-items.js';
// Change code below this line

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

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    const isImage = event.target.classList.contains('gallery__image');
    if (!isImage) return;

    event.preventDefault();

    event.target.src = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <div class="modal">
        <img src = "${event.target.src}"/>
    </div>`)

    instance.show()
}

