/*Создать две кнопки в HTML: start и stop.
Создать класс Timer с полями startTime, stopTime и interval.Создать несколько экземпляров класса с
 разными значениями свойств, вывести их в консоль.
Для класса Timer создать методы start и stop, getTime.
Создать экземпляр класса Timer, пусть он называется stopwatch.
При нажатии на кнопку start, метод stopwatch.start сохраняет момент нажатия в свойство startTime.
При нажатии на кнопку stop, метод stopwatch.stop сохраняет значение текущего момента времени в stopTime
 и записывает разницу между startTime и stopTime в interval.А метод stopwatch.getTime возвращает 
 значение поля interval, которое необходимо вывести в консоль.
Для класса Timer создать статический метод timeToNY который возвращает кол - во дней от сегодня и до 
Нового Года.
*/
const timerOutput = document.querySelector("#timer");
const startBtn = document.querySelector('#start-button');
const stopBtn = document.querySelector('#stop-button');

class Timer {
  constructor(startTime, stopTime) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.interval = this.stopTime - this.startTime;
    this.timer = {
      currentTime: 0,
      id: ""
    };
  }

  start() {
    this.startTime = new Date();

    if (!this.timer.id) {
      this.timer.id = setInterval(() => {
        this.timer.currentTime += 4;
        timerOutput.textContent = Timer.getFormattedTime(this.timer.currentTime);
      }, 4);
    }
  }

  stop() {
    if (this.timer.id) {
      this.stopTime = new Date();
      this.interval = this.stopTime - this.startTime;

      clearInterval(this.timer.id);
      this.timer.id = '';
      this.timer.currentTime = 0;

      console.log(`Прошло ${Math.round(this.getTime()/10)/100} секунд`);
    }
  }

  getTime() {
    return this.interval;
  }

  static timeToNY () {
    let d = new Date();
    let daysToNY = Math.round((new Date(d.getFullYear() + 1, 0, 1) - d) / 1000 / 60 / 60 / 24);
    console.log(`До нового года осталось ${daysToNY} дней`);
    return daysToNY;
  }

  static getFormattedTime(time) {
    const date = new Date(time);
    const mt =
      date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
    const sc =
      date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
    const ms =
      date.getMilliseconds() < 10
        ? "00" + date.getMilliseconds()
        : date.getMilliseconds() < 100
          ? "0" + date.getMilliseconds()
          : date.getMilliseconds();

    return `${mt}:${sc}:${ms}`;
  }
}

let timer1 = new Timer (new Date(), new Date());
console.log(timer1);
let timer2 = new Timer (new Date(1995, 11, 17), new Date(1995, 11, 18));
console.log(timer2);
let timer3 = new Timer (new Date(1995, 11, 17), new Date(1995, 12, 17));
console.log(timer3);

let stopWatch = new Timer();
startBtn.addEventListener('click', () => {stopWatch.start()});
stopBtn.addEventListener('click', () => {stopWatch.stop()});
