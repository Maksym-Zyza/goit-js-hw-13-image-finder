import './styles.css';
import './js/modal'
import refs from './js/refs'
import apiService from './js/apiService'
import updateMarkup from './js/markup'
import scroll from './js/scroll';
import notice from './js/notification'

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
  refs.btnToTop.classList.remove('is-hidden');

  apiService
    .fetchImages()
    .then(images => {
      if (images.length === 0) {
      notice.showNotice();

        return;
      }

      updateMarkup(images);
      refs.button.classList.remove('is-hidden');
      scroll();

      if (apiService.page < 3) {
        notice.showSuccess()
      } else {
      refs.btnToTop.classList.add('is-hidden');
       }
    })
    .catch(({message})=> notise.showError(message));
}


