import { incrementProgress } from './progressbar.js';
import { tryGetDirt } from './inventory.js';

// Total click tracker for achievements/rewards
let totalLandClicks = 0;
let clearLandClicks = 0;

// Function for the Clear Land button. Probably needs to be made modular.
export function createButton(buttonId, buttonText, itemName, containerId) {
  const button = document.createElement('button');
  button.id = buttonId;
  button.textContent = buttonText;
  button.addEventListener('click', function() {
    tryGetDirt();
    totalLandClicks++;
    incrementProgress(1);
    // Clear Land Progress separated from Progress Bar
    clearLandClicks++;
    if (clearLandClicks > 9) {
      clearLandClicks = 0;
    };
    updateLandProgress();
  });
  document.getElementById('buttonContainer').appendChild(button);
}

function updateLandProgress() {
  document.getElementById('clickCount').innerText = `${clearLandClicks}/10`;
}