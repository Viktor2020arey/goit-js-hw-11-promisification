import './task-1.js';

import './styles.css';
// ----------------------------------------------------------------

const promise = new Promise((resolve, reject) => {
  const canFullFill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFullFill) {
      resolve('Все ок');
    }
    reject('ошибка');
  }, 1000);
});

promise.then(onFullFilled, onRejected);

function onFullFilled(result) {
  console.log(result);
}

function onRejected(error) {
  console.log(error);
}

// цепочки промисов

promise
  .then(onFullFilled)
  .then(x => {
    console.log(x);
    return 10;
  })
  .then(y => {
    console.log(y);
  })
  .catch(error => console.log(error));
