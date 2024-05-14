import { incrementProgress } from './progressbar.js';
import { tryGetDirt } from './inventory.js';

// Total click tracker for achievements/rewards
let totalClicks = 0;

// Function for the Clear Land button. Probably needs to be made modular.
export function createButton(buttonId, buttonText, itemName, containerId) {
  const button = document.createElement('button');
  button.id = buttonId;
  button.textContent = buttonText;
  button.addEventListener('click', function() {
    tryGetDirt();
    totalClicks++;
    incrementProgress(1);
  });
  document.getElementById('buttonContainer').appendChild(button);
}