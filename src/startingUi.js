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

const conditions = document.createElement('h4');
conditions.id = 'conditions';

const realFeel = document.createElement('h2');
realFeel.id = 'realFeel';

const hiLoTemp = document.createElement('h2');
hiLoTemp.id = 'hiLoTemp';

const precipDiv = document.createElement('div');
precipDiv.id = 'precipDiv';
precipDiv.classList.add('hidden');

const precipProb = document.createElement('h1');
precipProb.id = 'precipProb';

const humidity = document.createElement('h4');
humidity.id = 'humidity';

const cloudCover = document.createElement('h2');
cloudCover.id = 'cloudCover';

const windDiv = document.createElement('div');
windDiv.id = 'windDiv';
windDiv.classList.add('hidden');
const wind = document.createElement('h2');
wind.id = 'wind';
const windArrow = document.createElement('h2');
windArrow.style.width = '20px';
windArrow.textContent = '>';
windArrow.id = 'windArrow';

const sunDiv = document.createElement('div');
sunDiv.id = 'sunDiv'
sunDiv.classList.add('hidden');


const miscInfoDiv = document.createElement('div');
miscInfoDiv.id = 'miscInfoDiv';

/* uv index */
const uvIndex = document.createElement('div');
uvIndex.id = 'uvIndex';

/* visibility */
const visibility = document.createElement('div');
visibility.id = 'visibility';




mainDiv.appendChild(searchBar);
mainDiv.append(locationText);
mainDiv.append(dateText);
mainDiv.append(tempDiv);
tempDiv.append(avgTemp, conditions, realFeel, hiLoTemp);
mainDiv.appendChild(precipDiv);


searchBar.appendChild(locationInput);
searchBar.appendChild(date1Input);
searchBar.appendChild(searchBtn);

mainDiv.appendChild(precipDiv);
precipDiv.append(precipProb, humidity, cloudCover, windDiv);
windDiv.append(windArrow, wind);

mainDiv.appendChild(sunDiv);

mainDiv.appendChild(miscInfoDiv);
miscInfoDiv.append(uvIndex, visibility);

mainDiv.appendChild(imageContainer);
imageContainer.appendChild(image);


export { mainDiv, locationInput }