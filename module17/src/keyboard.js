const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keysString = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const keys = keysString.split("");
const slider = document.querySelector("#slideThree");
const activeBtn = {
  node: null
};
let keyPressed = [];

let string = '';
let charsArr = [];

const timerOutput = document.querySelector("#timer");
const exercise = document.querySelector(".exercise");
const exerciseInput = document.querySelector(".exercise__input");
const exerciseBtn = document.querySelector(".exercise__button");

const timer = {
  currentTime: 0,
  id: ""
};


if (localStorage.getItem("bestResult")) {

  alert(`Ваш лучший результат - ${localStorage.getItem("bestResult")} правильных символов в секунду. Пройти еще раз чтобы улучшить результат`);
}

function keyboardPressed(event) {
  // debugger;
  if (activeBtn.node) {
    activeBtn.node.classList.remove("keyboard__btn--active");
  };

  activeBtn.node = buttons.find(function (button) {

    // если нажата не буква, приводим event.keyCode к ASCII и отдельно обрабатываем пробел
    let a = event.keyCode;

    if (a == 222) { a = 39 }
    else if (a > 218) { a = a - 128 }
    else if (a > 187) { a = a - 144 }
    else if (a == 186) { a = 59 }
    else if (a == 32) { return button.innerHTML == "space" }

    return button.innerHTML.toUpperCase().charCodeAt(0) == a;
  });

  if (activeBtn.node) {
    activeBtn.node.classList.add("keyboard__btn--active");
    if (slider.checked) {
      playSound(activeBtn.node.getAttribute("data-note"));
    };
  }
}

function startTimer(event) {
  if (!timer.id) {
    timer.id = setInterval(() => {
      timer.currentTime += 10;
      updateTimer(timer.currentTime);
    }, 4);
  };
}

function startExercise(event) {
  debugger;
  if (keyPressed.length < charsArr.length) {
    keyPressed.push(event.key);
    exerciseInput.innerHTML += event.key;
  }

  if (keyPressed.length == charsArr.length) {
    clearInterval(timer.id);
    countKPS(timer.currentTime);
    window.removeEventListener("keydown", startTimer);
    window.removeEventListener("keydown", keyboardPressed);
    window.removeEventListener("keydown", startExercise);
  }
}

function countKPS(time) {
  let correctCounter = 0;
  for (let i = 0; i < charsArr.length; i++) {
    if (charsArr[i] == keyPressed[i]) { correctCounter++ }
  };
  let speed = Math.round(correctCounter / (time / 1000) * 1000) / 1000;

  // браузеру нужно время, что прорисовать часы и подсветку последней клавиши,
  // алерт выскакивает не дожидаясь, поэтому добавила 20мс
  setTimeout(() => alert(`Ваша скорость: ${speed} правильных символов в секунду. 
    
Чтобы пройти еще раз, перегрузите страницу или нажмите кнопку "Пройти упражнение".`), 20);

  if (localStorage.getItem("bestResult") < speed) {
    localStorage.setItem("bestResult", speed);
  }
}

function updateTimer(time) {
  timerOutput.textContent = getFormattedTime(time);
}


function getFormattedTime(time) {
  const date = new Date(time);
  const mt =
    date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  const sc =
    date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  const ms =
    date.getMilliseconds() < 100 ? "0" + Math.ceil(date.getMilliseconds() / 10) : Math.ceil(date.getMilliseconds() / 10);
  return `${mt}:${sc}:${ms}`;
}

function exerxiseBtnPressed() {
  debugger;
  exerciseInput.textContent = '';
  string = '';
  for (let i = 0; i < 5; i++) {
    string += keysString.charAt(Math.floor(Math.random() * keysString.length));
  }
  exercise.textContent = `Наберите строку: ${string}`;
  charsArr = string.split("");
  keyPressed = [];
  window.addEventListener("keydown", startTimer);
  window.addEventListener("keydown", startExercise);
  window.addEventListener("keydown", keyboardPressed);
}

exerciseBtn.addEventListener("click", exerxiseBtnPressed);




