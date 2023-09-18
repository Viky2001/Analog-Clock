function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourDeg = (hour % 12 + minute / 60) * 360 / 12;
  const minuteDeg = (minute + second / 60) * 360 / 60;
  const secondDeg = (second * 360) / 60;

  document.querySelector(".hour-hand").style.transform = `rotate(${hourDeg}deg)`;
  document.querySelector(".minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector(".second-hand").style.transform = `rotate(${secondDeg}deg)`;

  // Display the time
  const timeString = `${hour.toString().padStart(2, '0')} : ${minute.toString().padStart(2, '0')} : ${second.toString().padStart(2, '0')}`;
  document.querySelector(".time-display").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();
