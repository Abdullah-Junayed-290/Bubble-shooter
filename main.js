const bubble_container = document.querySelector(".bubble_container");
const score = document.querySelector("#score");
const targetDisplay = document.querySelector("#target");
const timer = document.querySelector("#timer");
const bubbles = document.querySelector(".bubbles");
const originalTime = 10;
let timeLeft = 10;
let scoreCount = 0;
let totalBubbles = 100;

function createBubbles() {
  bubble_container.innerHTML = ``
  for (let i = 1; i <= totalBubbles; ++i) {
    const bubble = document.createElement("div")
    bubble.classList.add("bubbles")
    bubble.textContent = Math.floor(Math.random() * 10);
    bubble_container.appendChild(bubble)
  }
}

function generateTarget() {
  const target = Math.floor(Math.random() * 10)
  targetDisplay.textContent = target;
}

function setTimer() {
  const timeInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      bubble_container.innerHTML = `
        <div class="append_container">
          <div class="game_over">Game Over</div>
          <div class="final_score">Score: ${scoreCount}</div>
          <button class="reset_button" onclick="resetGame()">Restart</button>
        </div>
      `
    }
  }, 1000);
}

function startGame() {
  createBubbles();
  generateTarget();
  setTimer();
}

function resetGame() {
  timeLeft = originalTime;
  scoreCount = 0;
  timer.textContent = timeLeft;
  score.textContent = 0;
  startGame();
}


bubble_container.addEventListener("click", (e) => {
  if (e.target.classList.contains("bubbles")) {
    if (e.target.textContent === targetDisplay.textContent) {
      scoreCount += 10;
    } else {
      scoreCount -= 5;
    }
    score.textContent = scoreCount;
  }
  generateTarget();
  createBubbles();
})

createBubbles();
generateTarget();
setTimer();