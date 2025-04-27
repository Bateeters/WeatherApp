import './startingUi.js';

export function getCloudCover(data) {
    const cloudCover = document.querySelector('#cloudCover');
    cloudCover.classList.remove('hidden');
    cloudCover.textContent = `${data.cloudcover}% Cloud Cover`;
}