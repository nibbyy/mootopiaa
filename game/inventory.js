import { items } from './items.js';

let dirtChance = 60;
let dirtMin = 2;
let dirtMax = 4;
let rockChance = 30;
let rockMin = 1;
let rockMax = 3;

// Setting all items to 0 at start of game (better way to do this?)
let inventory = {};
items.forEach(item => {
  inventory[item.name] = 0;
});

// Function called in game.js to initialize inventory
export function setupInventoryDisplay() {
  const inventoryDiv = document.getElementById('inventory');
  for (const item in inventory) {
    let itemElement = document.createElement('p');
    itemElement.id = item.toLowerCase() + 'Count';
    itemElement.style.display = 'none';
    itemElement.innerText = `${item}: ${inventory[item]}`;
    inventoryDiv.appendChild(itemElement);
    console.log("Creating element for item:", item);
  }
}

// Function when items are added to inventory, not sure if this is the best way to do this
function updateDisplay() {
  for (const item in inventory) {
    const itemElement = document.getElementById(item.toLowerCase() + 'Count');
    if (itemElement) {
      if (inventory[item] > 0) {
        itemElement.style.display = 'block';
        itemElement.innerText = `${item}: ${inventory[item]}`;
      } else {
        itemElement.style.display = 'none';
      }
    } else {
      console.log("Element not found for item:", item);
    }
  }
}

// General getmats function with variables to use for other materials
export function tryGetMats(itemName, chance, min, max) {
  if ((Math.random() * 100) <= chance) {
    const amount = Math.floor(Math.random() * (max - min + 1));
    inventory[itemName] += amount;
    console.log(`Received ${amount} ${itemName}.`);
    updateDisplay();
  }
}

export function tryGetDirt() {
  tryGetMats('Dirt', dirtChance, dirtMin, dirtMax);
}