import './startingUi.js';

export function getDateTime(datetimeEpoch) {
    const dateText = document.querySelector('#dateText');
    dateText.classList.remove('hidden');
        const date = new Date(datetimeEpoch * 1000); // convert seconds to milliseconds
        let formattedDate = date.toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });

        dateText.textContent = formattedDate;
}