export async function fetchWeather(location, date) {
    const apiKey = '3FDTEH9BZ4R2GC3DZQEXQR3AQ';

    if (location != '') {
        if (date != '') {
            const corsProxy = 'https://corsproxy.io/?';
            const url = `${corsProxy}https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=${apiKey}`;
            
            const response = await fetch(url);
            let data = await response.json();
            let dateSupplied = true;

            data = [data.resolvedAddress, data.days[0], data.days[0], dateSupplied];

            return data
        } else {
            const corsProxy = 'https://corsproxy.io/?';
            const url = `${corsProxy}https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=${apiKey}`;
            
            const response = await fetch(url);
            let data = await response.json();
            let dateSupplied = false;

            data = [data.resolvedAddress, data.currentConditions, data.days[0], dateSupplied];

            return data
        }
    } else {
        alert('Please enter a location');
    }
}
