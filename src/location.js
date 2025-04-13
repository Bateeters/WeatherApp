const mainDiv = document.createElement('div');
mainDiv.id = 'mainDiv';
document.body.appendChild(mainDiv);

const greeting = document.createElement('h1');
greeting.textContent = "Hello There!";


const searchBar = document.createElement('div')
const locationInput = document.createElement('input');
locationInput.type = 'text';
locationInput.placeholder = 'Enter a location';

const date1Input = document.createElement('input');
date1Input.type = 'date';
date1Input.id = 'Date';

const searchBtn = document.createElement('button');
searchBtn.textContent = 'Search';
searchBtn.onclick = getLocation;


mainDiv.appendChild(greeting);
mainDiv.appendChild(searchBar);
searchBar.appendChild(locationInput);
searchBar.appendChild(date1Input);
searchBar.appendChild(searchBtn);


export { mainDiv, greeting, locationInput }

const api_key = '3FDTEH9BZ4R2GC3DZQEXQR3AQ';

// Module-level variable to hold the weather data
let data = null;

// Export the variable so other modules can read it
export { data };

export async function getLocation() {
    let location = locationInput.value;
    let date1 = date1Input.value;

    if (location != '') {
        const baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;
        const url = date1 === '' 
            ? `${baseUrl}/${location}/?key=${api_key}`
            : `${baseUrl}/${location}/${date1}/?key=${api_key}`;

        const response = await fetch(url);
        const locationData = await response.json();
        
        // Update the exported variable
        data = date1 === '' 
            ? locationData.currentConditions 
            : locationData.days[0];

        // Update the UI
        const weatherImg = document.createElement('img');
        document.querySelectorAll(".weatherIcon").forEach(icon => icon.remove());

        weatherImg.classList.add("weatherIcon");
        weatherImg.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/58c79610addf3d4d91471abbb95b05e96fb43019/SVG/1st%20Set%20-%20Color/${data.icon}.svg`;
        mainDiv.appendChild(weatherImg);

        console.log(data)
        return data;
    } else {
        alert('Please enter a location');
    }
}