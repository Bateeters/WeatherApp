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

function testingInput(){
    let location = locationInput.value;
    let date1 = date1Input.value;
    console.log(location, date1);
}

async function getLocation() {
    let location = locationInput.value;
    let date1 = date1Input.value;

    if (location != '' ){
        if (date1 == '') {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${api_key}`);
            const locationData = await response.json()
            console.log(`${location} no date supplied.`);
            console.log(locationData.currentConditions.datetime);
            console.log(locationData.currentConditions.feelslike);
        } else if (date1 != ''){
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/?key=${api_key}`);
            const locationData = await response.json();
            console.log(`${location}, date supplied and was ${date1}.`);
            console.log(locationData.days[0].datetime);
            console.log(locationData.days[0].feelslike);
            
        }
    } else {
        alert('Please enter a location');
    }
}

export { getLocation, testingInput }