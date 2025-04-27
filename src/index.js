import './styles.css';
import './startingUi.js';
import { fetchWeather } from './api.js';
import { renderWeather } from './render.js';



document.querySelector('#search').addEventListener('click', async () => {
    const location = document.querySelector('#location').value;
    const date = document.querySelector('#date').value;

    try {
        const data = await fetchWeather(location, date);
        if (data) { // make sure data exists
            renderWeather(data);
        }
    } catch (error) {
        console.error('Failed to fetch weather:', error);
    }
});