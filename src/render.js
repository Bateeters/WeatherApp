import './startingUi.js';
import { getDateTime } from './date.js';    
import { locationRender } from './location.js';
import { getTemp, highLowTemps } from './temperature.js';
import { getPrecip } from './precipitation.js';
import { getHumidity } from './humidity.js';
import { getCloudCover } from './clouds.js';
import { getWind } from './wind.js';
import { getSun } from './sunRiseSet.js';
import { getUVIndex } from './uvIndex.js';
import { getVisibility } from './visibility.js';

export function renderWeather(data) {
    locationRender(data[0]);
    getDateTime(data[1].datetimeEpoch, data[3]);
    getTemp(data[1], data[3]);
    highLowTemps(data[2]);
    getPrecip(data[1]);
    getHumidity(data[1]);
    getCloudCover(data[1]);
    getWind(data[1]);
    getSun(data[1]);
    getUVIndex(data[1]);
    getVisibility(data[1]);

 
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
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });

    } else if (data[1].icon == 'clear-night') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg,rgb(43, 8, 73), rgb(24, 9, 82),rgb(11, 23, 104),rgb(5, 50, 90))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = 'none';
        });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });

    } else if (data[1].icon == 'partly-cloudy-day') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg,rgb(202, 211, 224), rgb(202, 211, 224),rgb(172, 202, 231),rgb(124, 197, 228))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });

    } else if (data[1].icon == 'partly-cloudy-night') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg,rgb(51, 62, 77), rgb(62, 76, 96),rgb(43, 81, 116),rgb(13, 117, 161))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = 'none';
        });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });

    } else if (data[1].icon == 'rain') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg,rgb(75, 101, 152), rgb(117, 150, 216)`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = '0 0 3px black';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });

    } else if (data[1].icon == 'cloudy') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg,rgb(172, 194, 203), rgb(195, 220, 235)`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'fog') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg,rgb(153, 153, 153), rgb(203, 201, 201)`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = '0 0 5px black';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    }  else if (data[1].icon == 'hail') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(179, 197, 208), rgb(134, 142, 150))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = '0 0 3px black';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'rain-snow-showers-day') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(168, 200, 224), rgb(180, 180, 180))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = '0 0 3px black';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'rain-snow-showers-night') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(72, 82, 104), rgb(108, 108, 117))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = '0 0 5px black';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'rain-snow') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(148, 172, 190), rgb(194, 194, 194))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = '0 0 3px black';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'showers-day') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(134, 182, 202), rgb(165, 190, 202))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = '0 0 3px black';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'showers-night') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(54, 65, 84), rgb(103, 116, 128))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = '0 0 5px black';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'sleet') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(169, 188, 203), rgb(118, 137, 151))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = '0 0 5px black';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'snow-showers-day') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(203, 223, 237), rgb(180, 210, 230))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'snow-showers-night') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(100, 122, 143), rgb(160, 182, 204))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = '0 0 5px black';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'snow') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(240, 248, 255), rgb(200, 220, 230))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'thunder-rain') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(60, 60, 90), rgb(30, 30, 50))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = '0 0 5px black';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'thunder-showers-day') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(102, 125, 153), rgb(60, 74, 100))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = '0 0 5px black';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'thunder-showers-night') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(40, 46, 60), rgb(25, 25, 40))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = '0 0 5px black';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'thunder') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(150, 150, 163), rgb(40, 40, 60), rgb(20, 20, 40))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'white';
            el.style.textShadow = '0 0 5px black';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    } else if (data[1].icon == 'wind') {
        mainDiv.style.backgroundImage = `linear-gradient(135deg, rgb(201, 217, 233), rgb(166, 193, 219))`;
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
          });
        const searchBar = document.querySelectorAll('#searchBar *');
        searchBar.forEach(el => {
            el.style.color = 'black';
            el.style.textShadow = 'none';
        });
    }
}