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

  let countDelay = delayNumber;

  for (let i = 1; i <= amountNumber; i += 1) {
    const p = createPromise(i, countDelay);

    p.then(value => console.log(value)).catch(error => console.log(error));

    countDelay = countDelay + stepNumber;
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
