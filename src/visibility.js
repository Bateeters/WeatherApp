import './startingUi.js';

export function getVisibility(data) {
    const visibility = document.querySelector('#visibility');
    visibility.innerHTML = `
    <h4>Visibility:</h4>
    <h2>${data.visibility} mi</h2>
    `;
}