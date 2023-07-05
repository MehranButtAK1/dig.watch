const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const container = setInterval(function time() {
  let datetoday = new Date();
  let hr = datetoday.getHours();
  let min = datetoday.getMinutes();
  let sec = datetoday.getSeconds();

  if (hr < 10) hr = '0' + hr;

  if (min < 10) min = '0' + min;

  if (sec < 10) sec = '0' + sec;

  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = sec;
})