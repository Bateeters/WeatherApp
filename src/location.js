import './startingUi.js';

export function locationRender(location) {
    const locationText = document.querySelector('#locationText');
    locationText.classList.remove('hidden');
    locationText.textContent = location;
}