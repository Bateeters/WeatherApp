const testDiv = document.createElement("div");
document.body.appendChild(testDiv);

const greeting = document.createElement("h1");
greeting.textContent = "Hello There!";

const introText = document.createElement("p");
introText.textContent = "This is a starter page for you with Webpack all set and ready to go!";

const locationInput = document.createElement('input');
locationInput.type = 'text';
locationInput.placeholder = 'Enter a location';


testDiv.appendChild(greeting);
testDiv.appendChild(introText);
testDiv.appendChild(locationInput);

export { testDiv, greeting, introText, locationInput }