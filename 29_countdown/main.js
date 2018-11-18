const timerDisplay = document.querySelector(".display__time-left");
const endDisplay = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
let countDown;
// function timer(seconds){
//     setInterval(function(){
//         seconds--;
//         console.log(seconds)
//     },1000)
// }

function timer(seconds) {
  clearInterval(countDown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countDown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}
function displayTimeLeft(secondsLeft) {
  // const hours = Math.floor(secondsLeft / 3600);
  // secondsLeft = secondsLeft % 3600;
  // console.log(`hours ${hours}`);
  // console.log(`secondsLeft ${secondsLeft}`);
  // const minutes = Math.floor(secondsLeft / 60);
  // secondsLeft = secondsLeft % 60;
  // console.log(`minutes ${minutes}`);
  // console.log(`secondsLeft ${secondsLeft}`);

  // console.log(`Total Time hr:${hours} min:${minutes} sec:${secondsLeft}`);
  const minutes = Math.floor(secondsLeft / 60);
  const remainderSeconds = secondsLeft % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endDisplay.textContent = `${hour > 12 ? hour - 12 : hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}
function startTimer() {
  seconds = parseInt(this.dataset.time);
  timer(seconds);
}
buttons.forEach(button => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function(e) {
  e.preventDefault();
  mins = this.minutes.value;
//   console.log(mins)
  seconds=mins*60;
  timer(seconds);
  this.reset();
});
