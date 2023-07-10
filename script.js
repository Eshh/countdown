let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const inputContainerRef = document.getElementById("input-container");
const countdownFormRef = document.getElementById("countdown-form");
const dateRef = document.getElementById("date-picker");
const countdownElement = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const coubtdownButton = document.getElementById("countdown-button");
const countdownSpans = document.querySelectorAll("span");

// Set date to minimum today
dateRef.setAttribute("min", new Date().toISOString().split("T")[0]);

function updaetCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  //   Breakdown date
  countdownValue = new Date(e.srcElement[1].value).getTime();
  updateDOM();
}

function updateDOM() {
  const now = new Date().getTime();
  const distance = countdownValue - now;
  console.log(countdownSpans);
  countdownSpans[0].textContent = Math.floor(distance / day);
  countdownSpans[1].textContent = Math.floor((distance % day) / hour);
  countdownSpans[2].textContent = Math.floor((distance % hour) / minute);
  countdownSpans[3].textContent = Math.floor((distance % minute) / second);
  countdownElTitle.textContent = `${countdownTitle}`;
  inputContainerRef.setAttribute("hidden", true);
  countdownElement.hidden = false;
}
// Event listeners

countdownFormRef.addEventListener("submit", updaetCountdown);
