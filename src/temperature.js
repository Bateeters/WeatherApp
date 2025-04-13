import { getLocation } from './location.js';

let weather = null
export async function doSomethingWithWeather() {
    const weather = await getLocation();
    console.log(weather.feelslike);

    const temp = document.createElement('h4');
    document.querySelectorAll(".tempCont").forEach(icon => icon.remove());
  
    temp.classList.add(".tempCont");
    temp.textContent = `${locationSearch.feelslike}`;
    mainDiv.appendChild(temp);

    return weather
}

export { weather };
