import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {

    const markup = images.map(image => `
        <li class="gallery-item">
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}"
                    alt="${image.tags}"
                    loading="lazy"/>
            </a>
            <div class="info">
                <p><strong>Likes</strong> ${image.likes}</p>
                <p><strong>Views</strong> ${image.views}</p>
                <p><strong>Comments</strong> ${image.comments}</p>
                <p><strong>Downloads</strong> ${image.downloads}</p>
            </div>
        </li>
        
    `).join('');
    galleryEl.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}