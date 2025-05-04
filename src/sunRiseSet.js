import './startingUi.js';

export function getSun(data) {
    console.log(data.timezone);
    const sunDiv = document.querySelector('#sunDiv');
    sunDiv.classList.remove('hidden');
    
    const oldSunRiseSet = document.querySelector('#sunRiseSet');
    if (oldSunRiseSet) {
        oldSunRiseSet.remove();
    }

    const sunRiseSet = document.createElement('div');
    sunRiseSet.id = 'sunRiseSet';

    const sunRise = document.createElement('div');
    sunRise.id = 'sunRise';

    const sunSet = document.createElement('div');
    sunSet.id = 'sunSet';

    const sunLine = document.createElement('hr');
    sunLine.id = 'sunLine';

    const sunDisclaimer = document.createElement('p');
    sunDisclaimer.id = 'sunDisclaimer';
    sunDisclaimer.innerText = `*Times shown are set to your machine's timezone.*`;

    
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

    let sunriseTime = new Date(data.sunriseEpoch * 1000); // Convert seconds to milliseconds
    let convertedSRTime = sunriseTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: userTimeZone
    });

    let sunsetTime = new Date(data.sunsetEpoch * 1000); // Convert seconds to milliseconds
    let convertedSSTime = sunsetTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: userTimeZone
    });
    

    sunRise.innerHTML = `
    <h4>Sunrise:</h4>
    <h2>${convertedSRTime}</h2>
    `;

    sunSet.innerHTML = `
    <h4>Sunset:</h4>
    <h2>${convertedSSTime}</h2>
    `;
    

    sunDiv.appendChild(sunRiseSet);
    sunRiseSet.append(sunRise, sunLine, sunSet, sunDisclaimer);
}