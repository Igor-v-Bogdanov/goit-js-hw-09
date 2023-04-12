const btns = document.querySelectorAll('button');
let timerId = null;
// console.log(btns);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

[...btns].forEach(btn => {
  btn.addEventListener('click', evt => {
    if (evt.target.hasAttribute('data-start')) {
      btns[0].disabled = true;
      btns[1].disabled = false;
      timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
      }, 1000);
    }
    if (evt.target.hasAttribute('data-stop')) {
      clearInterval(timerId);
      btns[0].disabled = false;
      btns[1].disabled = true;
    }
  });
});
