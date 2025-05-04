import './startingUi.js';

export function getTemp(data, dateSupplied) {
    const tempDiv = document.querySelector('#tempDiv');
    tempDiv.classList.remove('hidden');

    const avgTemp = document.querySelector('#avgTemp');
    const realFeel = document.querySelector('#realFeel');
    avgTemp.classList.remove('hidden');

    if (dateSupplied != true) {
        realFeel.classList.remove('hidden');
        let currentTemp = Math.round(data.temp);
        let feelsLike = Math.round(data.feelslike);
        avgTemp.textContent =  `${currentTemp}\u00B0F`;
        realFeel.textContent = `feels like ${feelsLike}\u00B0F`
    } else {
        realFeel.classList.add('hidden');
        let avg = Math.round(data.temp);
        avgTemp.textContent = `Avg Temp: ${avg}\u00B0F`;
    }
};

export function highLowTemps(data) {
    const hiLoTemp = document.querySelector('#hiLoTemp');
    hiLoTemp.classList.remove('hidden');

    let highOf = Math.round(data.tempmax);
    let lowOf = Math.round(data.tempmin);

    hiLoTemp.textContent = `${highOf}\u00B0F / ${lowOf}\u00B0F`;
}