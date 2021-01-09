const apiKey = '19268663-7f88b2c67b4246c5b4cd88041';

// export default {
//     query: '',
//     page: 1,
//     perPage: 12,
  
//     async getCards() {
//         const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${apiKey}`;
//         const res = await fetch(url);
//         const cards = res.json();
//         return console.log(cards);
//     },
// }


export default {
  searchQuery: '',
  page: 1,

  fetchImages() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`,
    )
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      });
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};

