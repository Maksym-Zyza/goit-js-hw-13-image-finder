import './styles.css';
import refs from './js/refs'
import apiService from './js/apiService'
import updateMarkup from './js/markup'
import scroll from './js/scroll';

refs.form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  refs.gallery.innerHTML = '';

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  apiService.resetPage();
  fetchImages();

  form.reset();
}

refs.button.addEventListener('click', fetchImages);

function fetchImages() {
  refs.button.classList.add('is-hidden');

  apiService
    .fetchImages()
    .then(images => {
      if (images.length === 0) {
        showNotice();

        return;
      }

      updateMarkup(images);
      refs.button.classList.remove('is-hidden');
      scroll();
    })
    .catch(console.log);
}