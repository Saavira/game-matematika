const questions = [
  {
    question: "Bentuk umum persamaan kuadrat adalah...",
    options: ["ax² + bx + c = 0", "ax + b = 0", "a² + bx + c = 0", "ax² + b = 0"],
    answer: 0
  },
  {
    question: "Akar-akar dari x² - 5x + 6 = 0 adalah...",
    options: ["x = 2 dan x = 3", "x = -2 dan x = -3", "x = 1 dan x = 6", "x = -1 dan x = -6"],
    answer: 0
  },
  {
    question: "Jika x² + 4x - 5 = 0, maka akar-akarnya adalah...",
    options: ["x = 5 dan x = -1", "x = -5 dan x = 1", "x = 1 dan x = 5", "x = -1 dan x = -5"],
    answer: 0
  },
  {
    question: "Diskriminan dari x² - 2x + 1 = 0 adalah...",
    options: ["0", "1", "2", "4"],
    answer: 0
  },
  {
    question: "Jumlah akar-akar dari x² + 6x + 8 = 0 adalah...",
    options: ["-6", "6", "8", "-8"],
    answer: 0
  },
  {
    question: "Jika x² - 9 = 0, maka nilai x adalah...",
    options: ["x = 3 dan x = -3", "x = 9 dan x = -9", "x = 0 dan x = 9", "x = 0 dan x = -9"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;
let timer = 300;
let speedMultiplier = 1;

const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";
  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(btn);
  });
  timer = 300 / speedMultiplier;
  updateTimerDisplay();
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  if (selected === q.answer) {
    score += 150;
  } else {
    score += 50;
  }
  scoreDisplay.textContent = Skor: ${score};
  nextBtn.disabled = false;
  document.querySelectorAll(".option-btn").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextBtn.disabled = true;
  } else {
    questionText.textContent = "Permainan selesai!";
    optionsContainer.innerHTML = "";
    timerDisplay.textContent = "";
    nextBtn.style.display = "none";
  }
}

function updateTimerDisplay() {
  timerDisplay.textContent = Sisa waktu: ${Math.ceil(timer)} detik;
}

function runTimer() {
  const interval = setInterval(() => {
    if (timer > 0) {
      timer -= 1;
      updateTimerDisplay();
    } else {
      clearInterval(interval);
      nextBtn.disabled = false;
    }
  }, 1000 / speedMultiplier);
}

function setSpeed(multiplier) {
  speedMultiplier = multiplier;
  if (multiplier === 2) score += 100;
  if (multiplier === 3) score += 200;
  scoreDisplay.textContent = Skor: ${score};
}

document.getElementById("speed2x").onclick = () => setSpeed(2);
document.getElementById("speed3x").onclick = () => setSpeed(3);
nextBtn.onclick = () => {
  nextQuestion();
  runTimer();
};

showQuestion();
runTimer();