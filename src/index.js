import './styles.css';
import './js/rafs'
import './js/request'


// 1.HTTP-запрос на Pixabay API
// поддерживает пагинацию, в ответе приходит по 12 объектов, параметр per_page
// свойства: webformatURL,largeImageURL,likes,views,comments,downloads

// 2. Форма поиска, Галерея изображений, Карточка изображения
// DOM-элемент - шаблонизация

// 3. Кнопку Load more - догружаться следующая порция изображений и рендериться вместе с предыдущими.
// window.scrollTo().

// Дополнительно:
// - pnotify
// - модалка - basicLightbox
// - Load more - спинер