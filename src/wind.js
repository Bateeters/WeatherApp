import './startingUi.js';

export function getWind(data) {
    const windDiv = document.querySelector('#windDiv');
    const windArrow = document.querySelector('#windArrow');
    const wind = document.querySelector('#wind');
    windDiv.classList.remove('hidden');
    
    /* 270 deg resets arrow to point North */
    let windDirection = Math.round(data.winddir+270);
    windArrow.style.rotate = `${windDirection}deg`;

    let windSpeed = Math.round(data.windspeed);
    console.log(data.winddir)
    if (20 <= data.winddir && data.winddir < 70){
        wind.textContent = `NE at ${windSpeed} MPH`;
    } else if (70 <= data.winddir && data.winddir < 115){
        wind.textContent = `E at ${windSpeed} MPH`;
    } else if (115 <= data.winddir && data.winddir < 160){
        wind.textContent = `SE at ${windSpeed} MPH`;
    } else if (160 <= data.winddir && data.winddir < 205){
        wind.textContent = `S at ${windSpeed} MPH`;
    } else if (205 <= data.winddir && data.winddir < 250){
        wind.textContent = `SW at ${windSpeed} MPH`;
    } else if (250 <= data.winddir && data.winddir < 295){
        wind.textContent = `W at ${windSpeed} MPH`;
    } else if (295 <= data.winddir && data.winddir < 340){
        wind.textContent = `NW at ${windSpeed} MPH`;
    } else {
        wind.textContent = `N at ${windSpeed} MPH`;
    }
}