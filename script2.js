const daysE = document.getElementById("days");
const hoursE = document.getElementById("hours");
const minutesE = document.getElementById("minutes");
const secondsE = document.getElementById("seconds");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");
const modal = document.getElementById("form-modal");
const fade = document.getElementById("fade");

const fixedDate = "18 April 2024 15:00:00";

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

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

cowntdown();
