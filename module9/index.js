/*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.
  
  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/

const lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};
const notes = ["do", "re", "mi", "fa", "sol", "la", "la", "sol", "fa", "mi", "re", "do"];

const createKeyboardLayout = (alphabet) => {

    let keyboard = {
        topRow: [],
        middleRow: [],
        bottomRow: []
    };
    let alphabetArray = alphabet.split("");

    alphabetArray.forEach(function(item, i) {
        if (i<12) {keyboard.topRow[i] = item}
        else if (i<23) {keyboard.middleRow[i-12] = item}
        else {keyboard.bottomRow[i-23] = item}
    });

    const tpl = document.querySelector('#keyboard-tpl').textContent.trim();

    const compiled = _.template(tpl, {variable: "keyboard"});

    const result = compiled(keyboard);

    document.querySelector('#keyboard-container').innerHTML += result;
}

createKeyboardLayout(lang.en);

const buttons = Array.from(document.querySelectorAll("button"));
const slider = document.querySelector("#slideThree");
const activeBtn = {
  node: null
};

const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  console.log(audio);
  audio.currentTime = 0;
  audio.play();
};



const keyboardPressed = event => {

  if (activeBtn.node) {
      activeBtn.node.classList.remove("keyboard__btn--active");
  };

  activeBtn.node = buttons.find(function(button) {

    // если нажата не буква, приводим event.keyCode к ASCII и отдельно обрабатываем пробел
    let a = event.keyCode;

    if (a == 222) {a = 39}
      else if (a > 218) {a = a - 128}
       else if (a > 187) {a = a - 144}
        else if (a == 186) {a = 59}
          else if (a == 32) {return button.innerHTML == "space"}

    return button.innerHTML.toUpperCase().charCodeAt(0) == a;
  });
  
  if (activeBtn.node) {
    activeBtn.node.classList.add("keyboard__btn--active");
    if (slider.checked) {
      playSound(activeBtn.node.getAttribute("data-note"));
    };
  }
}


window.addEventListener("keydown", keyboardPressed);




