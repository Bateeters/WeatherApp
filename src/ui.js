const mainDiv = document.createElement('div');
mainDiv.id = 'mainDiv';
document.body.appendChild(mainDiv);

const greeting = document.createElement('h1');
greeting.textContent = "Hello There!";


const searchBar = document.createElement('div')
const locationInput = document.createElement('input');
locationInput.type = 'text';
locationInput.placeholder = 'Enter a location';
locationInput.classList.add('locationInput2');

const date1Input = document.createElement('input');
date1Input.type = 'date';
date1Input.id = 'Date';
date1Input.classList.add('.dateInput2')

const searchBtn = document.createElement('button');
searchBtn.textContent = 'Search';
searchBtn.classList.add('searchBtn2');


mainDiv.appendChild(greeting);
mainDiv.appendChild(searchBar);
searchBar.appendChild(locationInput);
searchBar.appendChild(date1Input);
searchBar.appendChild(searchBtn);


export { mainDiv, greeting, locationInput }