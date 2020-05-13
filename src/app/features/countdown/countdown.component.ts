import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  constructor() { }

  FULL_DASH_ARRAY = 283;
  WARNING_THRESHOLD = 10;
  ALERT_THRESHOLD = 5;

  COLOR_CODES = {
    info: {
      color: 'green'
    },
    warning: {
      color: 'orange',
      threshold: this.WARNING_THRESHOLD
    },
    alert: {
      color: 'red',
      threshold: this.ALERT_THRESHOLD
    }
  };

  TIME_LIMIT = 60;
  timePassed = 0;
  timeLeft = this.TIME_LIMIT;
  timerInterval = null;
  remainingPathColor = this.COLOR_CODES.info.color;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timePassed = this.timePassed += 1;
      this.timeLeft = this.TIME_LIMIT - this.timePassed;
      document.getElementById('base-timer-label').innerHTML = this.formatTime(
        this.timeLeft
      );
      this.setCircleDasharray();
      this.setRemainingPathColor(this.timeLeft);

      if (this.timeLeft === 0) {
        this.onTimesUp();
      }
    }, 1000);
  }

  onTimesUp() {
    clearInterval(this.timerInterval);
  }

  formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds: any = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  setRemainingPathColor(time_Left) {
    const { alert, warning, info } = this.COLOR_CODES;
    if (time_Left <= alert.threshold) {
      document
        .getElementById('base-timer-path-remaining')
        .classList.remove(warning.color);
      document
        .getElementById('base-timer-path-remaining')
        .classList.add(alert.color);
    } else if (time_Left <= warning.threshold) {
      document
        .getElementById('base-timer-path-remaining')
        .classList.remove(info.color);
      document
        .getElementById('base-timer-path-remaining')
        .classList.add(warning.color);
    }
  }

  calculateTimeFraction() {
    const rawTimeFraction = this.timeLeft / this.TIME_LIMIT;
    return rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction);
  }

  setCircleDasharray() {
    const circleDasharray = `${(
      this.calculateTimeFraction() * this.FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById('base-timer-path-remaining')
      .setAttribute('stroke-dasharray', circleDasharray);
  }
}
