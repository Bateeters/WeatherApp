import './startingUi.js';

export function getUVIndex(data) {
    const uvIndex = document.querySelector('#uvIndex');
    if (data.uvindex <= 2) {
        uvIndex.innerHTML = `
        <h4>UV Index:</h4>
        <h2>Low</h2>
        `;
    } else if (data.uvindex <= 5) {
        uvIndex.innerHTML = `
        <h4>UV Index:</h4>
        <h2>Moderate</h2>
        `;
    } else if (data.uvindex <= 7) {
        uvIndex.innerHTML = `
        <h4>UV Index:</h4>
        <h2>High</h2>
        `;
    } else if (data.uvindex <= 10) {
        uvIndex.innerHTML = `
        <h4>UV Index:</h4>
        <h2>Very High</h2>
        `;
    } else {
        uvIndex.innerHTML = `
        <h4>UV Index:</h4>
        <h2>Extreme</h2>
        `;
    }

}