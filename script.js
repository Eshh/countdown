let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let countdownActive;

const inputContainerRef = document.getElementById("input-container");
const countdownFormRef = document.getElementById("countdown-form");
const dateRef = document.getElementById("date-picker");
const countdownElement = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const coubtdownButton = document.getElementById("countdown-button");
const countdownSpans = document.querySelectorAll("span");

const completeRef = document.getElementById("complete");
const completeInfoRef = document.getElementById("complete-info");
const completeButtonRef = document.getElementById("complete-button");

// Set date to minimum today
dateRef.setAttribute("min", new Date().toISOString().split("T")[0]);

function updaetCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  //   Breakdown date
  countdownValue = new Date(e.srcElement[1].value).getTime();
  if (e.srcElement[1].value == "") {
    alert("Please select date");
  } else {
    updateDOM();
  }
}

function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    inputContainerRef.setAttribute("hidden", true);
    if (distance < 0) {
      completeRef.hidden = false;
      countdownElement.hidden = true;
      clearInterval(countdownActive);
      completeInfoRef.textContent = `${countdownTitle} ended on ${
        new Date(countdownValue).toISOString().split("T")[0]
      }`;
    } else {
      countdownSpans[0].textContent = Math.floor(distance / day);
      countdownSpans[1].textContent = Math.floor((distance % day) / hour);
      countdownSpans[2].textContent = Math.floor((distance % hour) / minute);
      countdownSpans[3].textContent = Math.floor((distance % minute) / second);
      countdownElTitle.textContent = `${countdownTitle}`;
      countdownElement.hidden = false;
      completeRef.hidden = true;
    }
  }, second);
}

function resetCountdown() {
  countdownElement.hidden = true;
  completeRef.hidden = true;
  inputContainerRef.hidden = false;
  clearInterval(countdownActive);
  countdownTitle = "";
  countdownDate = "";
}

// Event listeners

countdownFormRef.addEventListener("submit", updaetCountdown);
coubtdownButton.addEventListener("click", resetCountdown);
completeButtonRef.addEventListener("click", resetCountdown);
