import './startingUi.js';

export function getHumidity(data) {
    const humidityDiv = document.querySelector('#humidity');
    humidityDiv.classList.remove('hidden');
    let humidityPercent = Math.round(data.humidity)
    humidityDiv.textContent = `${humidityPercent}% Humidity`;
}