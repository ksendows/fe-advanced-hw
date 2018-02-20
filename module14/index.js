// Создать две кнопки в HTML: start и stop.
// Реализовать функционал таймера отсчета старта печати через функцию- конструктор со свойсвами startTime, stopTime и interval.Добавить в prototype методы start и stop.
// При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.
// При нажатии на кнопку stop, функция сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval.
// При нажатии на stop, значение interval выводится в консоль.

const Timer = function () {
}

Timer.prototype.start = function () {
  this.startTime = new Date;  
}

Timer.prototype.stop = function () {
  this.stopTime = new Date;
  this.interval = this.stopTime - this.startTime;
  if (this.interval) {console.log(`Прошло ${Math.round(this.interval/10)/100} секунд с последнего нажатия клавиши Start`)};
}

const startBtn = document.querySelector('#start-button');
const stopBtn = document.querySelector('#stop-button');

const a = new Timer();
startBtn.addEventListener('click', () => {a.start()});
stopBtn.addEventListener('click', () => {a.stop()});