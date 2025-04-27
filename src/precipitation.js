import './startingUi.js';

export function getPrecip(data) {
    const precipDiv = document.querySelector('#precipDiv');
    const precipProb = document.querySelector('#precipProb');
    precipDiv.classList.remove('hidden');
    precipProb.classList.remove('hidden');
    
    if (data.preciptype != null) {
        precipProb.textContent = `${data.precipprob}% ${data.preciptype}` ;
    } else {
        precipProb.textContent = `${data.precipprob}%`;
    }
}