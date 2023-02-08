const startStopBtn = document.getElementById("start-stop-btn");
const resetBtn = document.getElementById("reset-btn");
const lapBtn = document.getElementById("lap-btn");
const timerDisplay = document.getElementById("timer");
const lapsDisplay = document.getElementById("laps");

let timerStart = false;
let timer = null;
let elapsedTime = 0;


startStopBtn.addEventListener("click", function() {
  if (!timerStart) {
    startStopBtn.textContent = "Stop";
    lapBtn.removeAttribute("disabled");
    timerStart = true;
    timer = setInterval(updateTimer, 10);
  } else {
    startStopBtn.textContent = "Start";
    lapBtn.setAttribute("disabled", true);
    timerStart = false;
    clearInterval(timer);
  }
});


resetBtn.addEventListener("click", function() {
  timerStart = false;
  elapsedTime = 0;
  timerDisplay.textContent = "00:00:00";
  startStopBtn.textContent = "Start";
  clearInterval(timer);
  lapsDisplay.innerHTML = "";
});


lapBtn.addEventListener("click", function() {
  if (timerStart) {
    addLap();
  }
});



function updateTimer() {
  elapsedTime += 1;
  timerDisplay.textContent = formatTime(elapsedTime);
}

function addLap() {
  let lap = document.createElement("li");
  lap.textContent = timerDisplay.textContent;
  lapsDisplay.appendChild(lap);
}


function formatTime(time) {
  let milliseconds = time % 100;
  let totalSeconds = Math.floor(time / 100);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  milliseconds = milliseconds.toString().padStart(2, "0");
  return `${minutes}:${seconds}:${milliseconds}`;
}



