import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('button');
btnStart.disabled = true;

const values = document.querySelectorAll('.value');
// console.log(values);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const startDate = Date.now();
    const endDate = selectedDates[0];

    if (endDate < startDate) {
      btnStart.disabled = true;
      window.alert('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
      btnStart.addEventListener('click', onClick);
      function onClick(evt) {
        setInterval(() => {
          const currentTime = Date.now();
          const deltaTime = endDate - currentTime;
          const endlessTime = convertMs(deltaTime);
          // console.log(endlessTime.seconds);
          //
          [...values].forEach(value => {
            if (endDate >= currentTime) {
              if (value.hasAttribute('data-seconds')) {
                value.innerHTML = `<span class="value" data-seconds>${endlessTime.seconds}</span>`;
              }
              if (value.hasAttribute('data-minutes')) {
                value.innerHTML = `<span class="value" data-minutes>${endlessTime.minutes}</span>`;
              }
              if (value.hasAttribute('data-hours')) {
                value.innerHTML = `<span class="value" data-hours>${endlessTime.hours}</span>`;
              }
              if (value.hasAttribute('data-days')) {
                value.innerHTML = `<span class="value" data-days>${endlessTime.days}</span>`;
              }
            }
          });
        }, 1000);
      }
    }
  },
};

flatpickr('#datetime-picker', options);
