const apiKey = '19779952-34022b0aec99bb73ff26dde3b';

export default {
  searchQuery: '',
  page: 1,
  perPage: 12,

  fetchCards() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${apiKey}`;

    return fetch(url)
      .then(res => res.json())
      .then(({ hits, totalHits }) => {
        this.incrementPage();
          return { hits, totalHits };
      });
    },

  resetPage() {
    this.page = 1;
  },

  incrementPage() {
    this.page += 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};