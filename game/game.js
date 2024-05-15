import { setupInventoryDisplay } from './inventory.js';
import { getCurrentTime } from './timeSystem.js';
import { createButton } from './buttonSystem.js';
import { weekNumber } from './timeSystem.js';
import { updateLandDisplay } from './landSystem.js';

// Test

// Game initialization: (Probably a better way to do this)
document.addEventListener('DOMContentLoaded', () => {
    setupInventoryDisplay();
    updateLandDisplay();
    createButton('clearLandButton', 'Clean Yard', 'Dirt', 'buttonContainer');
    setInterval(() => {
      const { currentHour, amPm, currentWeekDay, currentSeason, currentYear } = getCurrentTime();
      document.getElementById('seasonYearDisplay').innerText = `Week ${weekNumber} of ${currentSeason}, Year ${currentYear}`;
      document.getElementById('hourDayDisplay').innerText = `It is ${currentHour} ${amPm} on ${currentWeekDay}.`;
    }, 500);
});