const daysE = document.getElementById("days");
const hoursE = document.getElementById("hours");
const minutesE = document.getElementById("minutes");
const secondsE = document.getElementById("seconds");

const fixedDate = "18 April 2024";

function cowntdown() {
  setInterval(() => {
    const startDate = new Date(fixedDate);
    const currentDate = new Date();

    const totalSeconds = parseInt((startDate - currentDate) / 1000);
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    daysE.innerHTML = formatTimer(days);
    hoursE.innerHTML = formatTimer(hour);
    minutesE.innerHTML = formatTimer(minutes);
    secondsE.innerHTML = formatTimer(seconds);
  }, 1000);
}

function formatTimer(timer) {
  return timer < 10 ? `0${timer}` : timer;
}

cowntdown();
