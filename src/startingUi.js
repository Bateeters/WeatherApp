const mainDiv = document.createElement('div');
mainDiv.id = 'mainDiv';
mainDiv.classList.add('p-40');
document.body.appendChild(mainDiv);

const searchBar = document.createElement('div')
searchBar.id = 'searchBar';

const locationInput = document.createElement('input');
locationInput.type = 'text';
locationInput.placeholder = 'Enter a location';
locationInput.id = 'location';

const date1Input = document.createElement('input');
date1Input.type = 'date';
date1Input.id = 'date';

const searchBtn = document.createElement('button');
searchBtn.textContent = 'Search';
searchBtn.id = 'search';

const imageContainer = document.createElement('div');
imageContainer.id = 'imageContainer';
const image = document.createElement('img');
image.id = 'image';

const locationText = document.createElement('h1');
locationText.id = 'locationText';
locationText.classList.add('hidden');
locationText.classList.add('mb-0');

const dateText = document.createElement('h1');
dateText.id = 'dateText';
dateText.classList.add('hidden');
dateText.classList.add('mb-0');

const tempDiv = document.createElement('div');
tempDiv.id = 'tempDiv';
tempDiv.classList.add('hidden');

const avgTemp = document.createElement('h1');
avgTemp.id = 'avgTemp';
avgTemp.classList.add('hidden');

const conditions = document.createElement('h4');
conditions.id = 'conditions';
conditions.classList.add('hidden');

const realFeel = document.createElement('h2');
realFeel.id = 'realFeel';
realFeel.classList.add('hidden');

const hiLoTemp = document.createElement('h2');
hiLoTemp.id = 'hiLoTemp';
hiLoTemp.classList.add('hidden');

const precipDiv = document.createElement('div');
precipDiv.id = 'precipDiv';
precipDiv.classList.add('hidden');

/* precipitation probability */
const precipProb = document.createElement('h1');
precipProb.id = 'precipProb';
precipProb.classList.add('hidden');

/* humidity */
const humidity = document.createElement('h4');
humidity.id = 'humidity';
humidity.classList.add('hidden');

/* cloud cover */
const cloudCover = document.createElement('h2');
cloudCover.id = 'cloudCover';
cloudCover.classList.add('hidden');

/* wind */
const wind = document.createElement('h2');
wind.id = 'wind';
wind.classList.add('hidden');




/* sunrise / sunset */
const sunRiseSet = document.createElement('h2');
sunRiseSet.id = 'sunRiseSet';
sunRiseSet.classList.add('sunRiseSet');



/* uv index */
const uvIndex = document.createElement('h3');
uvIndex.id = 'uvIndex';
uvIndex.classList.add('uvIndex');

/* visibility */
const visiblity = document.createElement('h3');
visiblity.id = 'visiblity';
visiblity.classList.add('visiblity');




mainDiv.appendChild(searchBar);
mainDiv.append(locationText);
mainDiv.append(dateText);
mainDiv.append(tempDiv);
tempDiv.append(avgTemp, conditions, realFeel, hiLoTemp);
mainDiv.appendChild(precipDiv);
mainDiv.appendChild(imageContainer);


imageContainer.appendChild(image);
searchBar.appendChild(locationInput);
searchBar.appendChild(date1Input);
searchBar.appendChild(searchBtn);

mainDiv.appendChild(precipDiv);
precipDiv.appendChild(precipProb, humidity, cloudCover, wind);


export { mainDiv, locationInput }