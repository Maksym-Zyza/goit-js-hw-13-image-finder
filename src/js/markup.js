import refs from './refs';
import galleryItem from '../templates/image-card.hbs';

function updateMarkup(images) {
  const markup = galleryItem(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;