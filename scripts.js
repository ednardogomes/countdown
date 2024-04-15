const button = document.getElementById("button");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function startTimer(duration, display) {
  let timer = duration,
    days,
    hours,
    minutes,
    seconds;
  const newDate = "25 abr 2024";
  setInterval(function () {
    const fixedDay = new Date(newDate);
    const currentDate = new Date();

    const totalSeconds = (fixedDay - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const second = Math.floor(totalSeconds) % 60;
  });

  days.innerHTML = days;
  hours.innerHTML = hours;
  minutes.innerHTML = minutes;
  seconds.innerHTML = seconds;
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

startTimer();
