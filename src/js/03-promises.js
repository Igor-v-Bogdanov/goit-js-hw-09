const form = document.querySelector('.form');
// console.log(form);
const { delay, step, amount } = form;

//
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const delayNumber = Number(form.elements.delay.value);
  const stepNumber = Number(form.elements.step.value);
  const amountNumber = Number(form.elements.amount.value);
  //   console.log(delayNumber);
  //   console.log(stepNumber);
  //   console.log(amountNumber);
  // В КОНСОЛЬ НЕ ВЫВОДИТСЯ ВРЕМЯ В МС, ХОТЯ ПО ВРЕМЕНИ ОТРАБОТКИ ЗАДЕРЖЕК ВСЕ ПРАВИЛЬНО. НЕ МОГУ ПОНЯТЬ КАК СДЕЛАТЬ.

  let position = 1;
  let countDelay = delayNumber;

  for (let i = 1; i <= amountNumber; i += 1) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(createPromise, countDelay);

      function createPromise(position, countDelay) {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${i} in ${countDelay}ms`);
        } else {
          reject(`❌ Rejected promise ${i} in ${countDelay}ms`);
        }
      }

      countDelay = countDelay + stepNumber;
      position += 1;
    });

    promise
      .then(value => console.log(value))
      .catch(error => console.log(error));
  }
}
