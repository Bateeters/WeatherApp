import './styles.css';
import './startingUi.js';
import { fetchWeather } from './api.js';
import { renderWeather } from './render.js';
import { testRender } from './testing.js';



document.querySelector('#search').addEventListener('click', async () => {
    const location = document.querySelector('#location').value;
    const date = document.querySelector('#date').value;
    const data = await fetchWeather(location, date);

    renderWeather(data);

    testRender();

});

/* add the below to Starting UI Module */