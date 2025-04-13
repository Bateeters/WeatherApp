export async function fetchWeather(city, date = '') {
    const api_key = '3FDTEH9BZ4R2GC3DZQEXQR3AQ';
    let data = null;

    if (city != '') {
        const baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;
        const url = date === '' 
            ? `${baseUrl}/${city}/?key=${api_key}`
            : `${baseUrl}/${city}/${date}/?key=${api_key}`;

        const response = await fetch(url);
        const locationData = await response.json();
        
        // Update the exported variable
        data = date === '' 
            ? locationData.currentConditions 
            : locationData.days[0];

        console.log(data)
        return data;
    } else {
        alert('Please enter a location');
    }
}