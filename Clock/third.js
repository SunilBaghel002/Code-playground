const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const digitalClock = document.getElementById('digitalClock');

function setClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;  
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;  
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');
  digitalClock.textContent = `${hour}:${minute}:${second}`;
}

setInterval(setClock, 1000);  
setClock();  
