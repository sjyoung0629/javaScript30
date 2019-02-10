const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const timezone_btn = document.querySelectorAll('.timezone');
let timezone;
timezone_btn.forEach(btn => btn.addEventListener("click", () => {
    timezone = btn.getAttribute('data-tz');
    setDate(timezone);
}));

// timezone에 따른 시간 setting
const setDate = (timezone) => {
    let now = new Date().toLocaleString('en-US', { timeZone: timezone });
    now = new Date(now);

    const hours = now.getHours();
    const mins = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegrees = ((hours / 12) * 360) + 90;
    const minsDegrees = ((mins / 60) * 360) + 90;
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(() => {
    setDate(timezone);
}, 1000);