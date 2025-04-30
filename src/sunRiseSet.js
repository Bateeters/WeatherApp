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
    <h3>Sunrise</h3
    <h4>${convertedSRTime}</h4>
    `;

    sunSet.innerHTML = `
    <h3>Sunset</h3>
    <h4>${convertedSSTime}</h4>
    `;
    

    sunDiv.appendChild(sunRiseSet);
    sunRiseSet.append(sunRise, sunLine, sunSet);
}