import './startingUi.js';
import { getDateTime } from './date.js';    
import { locationRender } from './location.js';
import { getTemp, highLowTemps } from './temperature.js';
import { getPrecip } from './precipitation.js';

export function renderWeather(data) {
    locationRender(data[0]);
    getDateTime(data[1].datetimeEpoch, data[3]);
    getTemp(data[1], data[3]);
    highLowTemps(data[2]);
    getPrecip(data[2]);

 
    const imageUrl = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/1st%20Set%20-%20Monochrome/${data[1].icon}.svg`;

    const image = document.querySelector('#image')
    const imageStyle = image.style;
    image.src = imageUrl;
    imageStyle.display = 'initial';

    console.log(data);

    const mainDiv = document.querySelector('#mainDiv');
    const conditions = document.querySelector('#conditions');
    let weatherConditions = data[1].conditions;
    conditions.classList.remove('hidden');
    conditions.textContent = weatherConditions;

    if (data[1].icon == 'clear-day') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg,rgb(238, 223, 147), rgb(230, 200, 126),rgb(172, 202, 231),rgb(124, 197, 228))`;
    } else if (data[1].icon == 'partly-cloudy-day') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg,rgb(202, 211, 224), rgb(202, 211, 224),rgb(172, 202, 231),rgb(124, 197, 228))`;
    } else if (data[1].icon == 'rain') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg,rgb(75, 101, 152), rgb(117, 150, 216)`;
    } else if (data[1].icon == 'cloudy') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg,rgb(172, 194, 203), rgb(195, 220, 235)`;
    }
}