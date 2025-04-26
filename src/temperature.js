import './startingUi.js';

export function getTemp(data, dateSupplied) {
    const tempDiv = document.querySelector('#tempDiv');
    tempDiv.classList.remove('hidden');

    const avgTemp = document.querySelector('#avgTemp');
    avgTemp.classList.remove('hidden');

    if (dateSupplied != true) {
        const realFeel = document.querySelector('#realFeel');
        realFeel.classList.remove('hidden');
        let currentTemp = Math.round(data.temp);
        let feelsLike = Math.round(data.feelslike);
        avgTemp.textContent =  `${currentTemp}\u00B0C`;
        realFeel.textContent = `feels like ${feelsLike}\u00B0C`
    } else {
        let avg = Math.round(data.temp);
        avgTemp.textContent = `Avg Temp: ${avg}\u00B0C`;
    }
};

export function highLowTemps(data) {
    const hiLoTemp = document.querySelector('#hiLoTemp');
    hiLoTemp.classList.remove('hidden');

    let highOf = Math.round(data.tempmax);
    let lowOf = Math.round(data.tempmin);

    hiLoTemp.textContent = `${highOf}\u00B0C / ${lowOf}\u00B0C`;
}