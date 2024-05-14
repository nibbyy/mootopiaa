import { incrementHour } from './timeSystem.js';

// Current progress of bar, can be increased for other activities that increase time.
let progress = 0;

export function incrementProgress(amount) {
    progress += amount;
    if (progress >= 10) {
        progress = 0;
        incrementHour();
    }
    updateProgressBar();
}

function updateProgressBar() {
    document.getElementById('progressBar').style.width = `${progress * 10}%`;
    document.getElementById('clickCount').innerText = `${progress}/10`;
}