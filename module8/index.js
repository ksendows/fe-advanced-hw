/*
 Напишите скрипт который реализует следующее поведение:
 
 - При нажатии на клавишу (не виртуальной клавиатуры) должно 
  обрабатываться событие keydown.
  (Для обработки нажатия нажатия клавиш, повесьте слушателя на window.
  window.addEventListener("keydown", callback);)
 
 - Должны обрабатываться только те клавиши, которые присутствуют
  в разметке HTML (на виртуальной клавиатуре).
 
 - Звук нажатия на клавишу должен соответсвовать ноте, описанной 
  в атрибуте button data-note.

 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.
 
 - Чекбокс Sound должен включать и выключать звук нажатия на клавиши. 
*/

const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
const slider = document.querySelector("#slideThree");
const activeBtn = {
  node: null
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

    if (a == 46 && )
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


