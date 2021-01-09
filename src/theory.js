// Синтаксис async/await
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

// makePromiseSmothie().then((smothie) => console.log(smothie))

function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };

  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(fruits[name]), 500),
  );
}

async function aMakeSmoothie() {
  try {
    console.time('aMakeSmoothie');
    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');
    const berry = getFruit('strawberry');

    const fruits = await Promise.all([apple, kiwi, berry]);
    console.log(fruits);
    console.timeEnd('aMakeSmoothie');

    return fruits;
  } catch (error) {
    console.log('Ошибка');
  }
}

aMakeSmoothie();

// async function fn () {}

// const fn  = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName () {}
// }
 
 