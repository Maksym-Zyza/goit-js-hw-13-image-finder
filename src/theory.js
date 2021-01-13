// ========== Обработка ошибок с try...catch ==========
//  - Синтаксис
//  - Какие ошибки ловит
//    - ❌ ошибки парсинга (parsing errors)
//    - ✅ ошибки выполнения (runtime errors)
//  - Ловит только ошибки в синхронном коде
//    - Как словить ошибку в асинхронном коде
//  - Объект ошибки
//    - name
//    - message
//    - stack
//  - Блок catch без объекта ошибки

// try {
//   console.log('Внутри try до myVar');

//   myVar;

//   console.log('Внутри try после myVar');
// } catch (error) {
//   console.log('Ошибка!');
// }

// console.log('После try...catch');


// ============= JSON.parse ================
// const validJSON = '{ "name": "Манго", "age": 3 }';
// const invalidJSON = '{ бекенд вернул вот такое чудо }';

// try {
//   console.log(1);

//   console.log(JSON.parse(invalidJSON));

//   console.log(2);
// } catch (error) {
//   console.log(error);
//   if (error.name === 'SyntaxError') {
//     console.log('Ошибка парса json надо чтото сделать');
//   }
// }

// console.log('После try...catch');

// ============== Синтаксис async/await =============
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch

// ===== Асинхронние функции возвращают промис
// const getFruit = (name) => {
//     const fruits = {
//         apple: 'apple',
//         peach: 'peach',
//         grapes: 'grapes',
//     };

//     return Promise.resolve(fruits[name])
// } 
 
// // getFruit('apple').then((fruit) => console.log(fruit));

// const getFruit = async (name) => {
//     const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝 ',
//     apple: '🍎',
//     };

//     return fruits[name]
// } 
 
// getFruit('apple').then((fruit) => console.log(fruit));

// // ===== Избегаем promise hell и чейнинг с ошибкой паралельного виполнения

// // const makePromiseSmothie = () => {
// //     return getFruit('apple').then((apple) => {
// //         return getFruit('kiwi').then((kiwi) => {
// //             return [apple, kiwi]
// //         });
// //     });
// // };

// // makePromiseSmothie().then((smothie) => console.log(smothie))

// // Используем асинхронние функции

// // const makePromiseSmothie = async () => {
// //     const apple = await getFruit('apple');
// //     const kiwi = await getFruit('kiwi');

// //     return [apple, kiwi];
// //  }

// //  makePromiseSmothie().then((smothie)=> console.log(smothie))

// // ==== Исправляем ошибку паралельного исполнения

// // const deley = (ms) => {
// //     return new Promise((resolve) => setTimeout(() => resolve(''), ms));
// //  }

// // const makePromiseSmothie = async () => {
// //     const apple =  getFruit('apple');
// //     const kiwi =  getFruit('kiwi');
// //     const strawberry =  getFruit('strawberry');

// //     const smothie = await Promise.all([apple, kiwi, strawberry])

// //     return [smothie];
// //  }

// // makePromiseSmothie().then((smothie) => console.log(smothie))
 
// //  ==== Обработка ошибок

// const makePromiseSmothie = async () => {
//     try {
//         const apple = getFruit('apple');
//         const kiwi = getFruit('kiwi');
//         const strawberry = getFruit('strawberry');

//         const smothie = await Promise.all([apple, kiwi, strawberry])

//         // throw 'Поломалось!'

//         return smothie;
//     } catch (error) {console.log('Error:', error)}
//  }

// // makePromiseSmothie().then((smothie) => console.log(smothie))

// function getFruit(name) {
//   const fruits = {
//     strawberry: '🍓',
//     kiwi: '🥝 ',
//     apple: '🍎',
//   };

//   return new Promise((resolve, reject) =>
//     setTimeout(() => resolve(fruits[name]), 500),
//   );
// }

// async function aMakeSmoothie() {
//   try {
//     console.time('aMakeSmoothie');
//     const apple = getFruit('apple');
//     const kiwi = getFruit('kiwi');
//     const berry = getFruit('strawberry');

//     const fruits = await Promise.all([apple, kiwi, berry]);
//     console.log(fruits);
//     console.timeEnd('aMakeSmoothie');

//     return fruits;
//   } catch (error) {
//     console.log('Ошибка');
//   }
// }

// aMakeSmoothie();

// async function fn () {}

// const fn  = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName () {}
// }
 

// ================ async-crud =================
// const BASE_URL = 'http://localhost:4040';

// async function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   const response = await fetch(`${BASE_URL}/books`, options);
//   const newBook = await response.json();

//   return newBook;
// }

// // async function addBookAndUpdateUI() {
// //   try {
// //     const book = await addBook({});
// //     console.log(book);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // addBookAndUpdateUI();

// async function fetchBooks() {
//   const response = await fetch(`${BASE_URL}/books`);
//   const books = await response.json();
//   return books;
// }

// async function fetchBookById(bookId) {
//   const response = await fetch(`${BASE_URL}/books/${bookId}`);
//   const book = await response.json();
//   return book;
// }

// async function removeBook(bookId) {
//   const url = `${BASE_URL}/books/${bookId}`;
//   const options = {
//     method: 'DELETE',
//   };

//   const response = await fetch(url, options);
//   const book = await response.json();
//   return book;
// }

// async function updateBookById(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   const response = await fetch(`${BASE_URL}/books/${bookId}`, options);
//   const book = await response.json();
//   return book;
// }

// ================ axios ==================

// === import ===
// import axios from 'axios'

//  === Global axios defaults ===
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

import axios from 'axios'
const apiKey = '19268663-7f88b2c67b4246c5b4cd88041';

axios.defaults.baseURL = 'https://pixabay.com/api'

export default {
  searchQuery: '',
  page: 1,

  async fetchImages() { 
    const { data } = await axios.get(`/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`)

    this.incrementPage();
    
    return data.hits;
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



  // fetchImages() {
  //   return fetch(
  //     `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`,
  //   )
  //     .then(response => response.json())
  //     .then(({ hits }) => {
  //       this.incrementPage();

  //       return hits;
  //     });
  // }

  
