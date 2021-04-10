// import './task-1.js';

import './styles.css';

// ----------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//   const canFullFill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFullFill) {
//       resolve('Все ок');
//     }
//     reject('ошибка');
//   }, 1000);
// });

// promise.then(onFullFilled, onRejected);

// function onFullFilled(result) {
//   console.log(result);
// }

// function onRejected(error) {
//   console.log(error);
// }

// // цепочки промисов

// promise
//   .then(onFullFilled)
//   .then(x => {
//     console.log(x);
//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('я буду выполнен в любом случае'));

// Промисификация функций

// const makeOrder = dish => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('Вот ваше блюдо');
//       }
//       reject('Извините у нас закончились продукты');
//     }, DELAY);
//   });
// };

// makeOrder('пирожок').then(onMakeOrderSucces).catch(onMakeOrderError);

// function onMakeOrderSucces(result) {
//   console.log('onMakeOrderSucces');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

// выполнение всегда правильной функции

// const makeOrder = dich => {
//   return Promise.resolve(`Вот ваш заказ: ${dich}`);
// };

// makeOrder('пирожок').then(onMakeOrderSucces);

// function onMakeOrderSucces(result) {
//   console.log('onMakeOrderSucces');
//   console.log(result);
// }

// запрос на сервер(практика)

// .then(pokemon => {
//       onSuccess(pokemon);
//     })
//     .catch(error => {
//       onError(error);
//     });

const fetchPokemonByID = id => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
};

fetchPokemonByID(3).then(onFetchSuccess).catch(onFetchError);

function onFetchSuccess(pokemon) {
  console.log(pokemon);
}

function onFetchError(error) {
  console.log('Это в блоке catch');
  console.log(error);
}
