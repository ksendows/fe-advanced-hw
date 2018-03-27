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
        this.timer.currentTime += 10;
        timerOutput.textContent = Timer.getFormattedTime(this.timer.currentTime);
      }, 10);
    }
  }

  stop() {
    if (this.timer.id) {
      this.stopTime = new Date();
      this.interval = this.stopTime - this.startTime;

      clearInterval(this.timer.id);
      this.timer.id = '';
      this.timer.currentTime = 0;
    }
  }

  getTime() {
    return this.interval;
  }

  static getFormattedTime(time) {
    const date = new Date(time);
    const mt =
      date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
    const sc =
      date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
    const ms =
      date.getMilliseconds() < 100 ? "0" + Math.ceil(date.getMilliseconds()/10) : Math.ceil(date.getMilliseconds()/10);
    return `${mt}:${sc}:${ms}`;
  }
}

let stopWatch = new Timer();
startBtn.addEventListener('click', () => {stopWatch.start()});
stopBtn.addEventListener('click', () => {stopWatch.stop()});

