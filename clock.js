const time = document.querySelector(".clock .clock__time");

init();

function init() {
  elipse();
  setInterval(elipse, 1000);
}

function elipse() {
  const date = new Date();
  const hour = format2Digit(date.getHours());
  const min = format2Digit(date.getMinutes());
  const sec = format2Digit(date.getSeconds());

  time.innerText = `${hour}:${min}:${sec}`;
}

function format2Digit(digit) {
  if (digit < 10) {
    return `0${digit}`;
  } else {
    return digit;
  }
}
