const buttonEl = document.getElementById("button");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newDate = "18 April 2024";

function startTimer() {
  const fixedDay = new Date(newDate);
  const currentDate = new Date();
  setInterval(function () {
    const totalSeconds = (fixedDay - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const second = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(second);
  });
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

startTimer(startTimer, 1000);
