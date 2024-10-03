const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;  // Offset by 90 to start from top
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;  // Adjust for smooth transition
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;  // 30 degrees per hour
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setClock, 1000);  // Update clock every second
setClock();  // Initialize clock
