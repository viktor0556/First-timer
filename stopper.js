let intervalId;
let secs = 0;
let min = 0

function start() {
  const buttonElement = document.querySelector('.js-start-button');

  if (buttonElement.innerText === "Start") {
    buttonElement.innerHTML = "Stop";
    intervalId = setInterval(() => {
      if (buttonElement.innerText === "Stop") {
        secs += 1;
        if (secs % 60 === 0) {
          min += 1
          secs = 0;
        }
        document.querySelector('.js-timer-paragh').innerText = `${min}:${secs}`;
        }
    }, 1000);
  } else{
    buttonElement.innerHTML = "Start";
    clearInterval(intervalId);
  } 
}

function reset() {

  document.querySelector('.js-timer-paragh').innerText = 0;
  secs = 0;
  min = 0;
}

document.querySelector(".js-start-button").addEventListener("click", () => {
  start();
});
document.querySelector(".js-reset-button").addEventListener("click", () => {
  reset();
});
