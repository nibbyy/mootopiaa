let totalLand = 1000;
let filledLand = 1000;
let clearLand = 0;

// Logic for clearing a piece of Land
export function clearLandPiece() {
    if (filledLand > 0) {
        filledLand--;
        clearLand++;
        console.log(`Land Cleared: ${clearLand}, Land Filled: ${filledLand}`);
        updateLandDisplay();
    }
}

// Export variables
export function getLandProgress() {
    return { totalLand, filledLand, clearLand };
}

export function updateLandDisplay() {
    document.getElementById('landStatus').innerText = `Land: ${filledLand}/${totalLand}`;
}