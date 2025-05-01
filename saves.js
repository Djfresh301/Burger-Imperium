// saves.js
const saveData = {
    money: 0,
    burgerPrice: 10,
    speedMultiplier: 1,
    branches: [
        { name: "Hauptfiliale", level: 1, customersServed: 0 }
    ],
    upgrades: {
        burgerUpgrade: 0,
        speedUpgrade: 1
    },
    adsActive: false,
    currentBranch: 0
};

// Funktion zum Speichern des Spiels
function saveGame() {
    localStorage.setItem('gameSave', JSON.stringify(saveData));
    console.log("Spiel gespeichert");
}

// Funktion zum Laden des Spiels
function loadGame() {
    const savedGame = localStorage.getItem('gameSave');
    if (savedGame) {
        Object.assign(saveData, JSON.parse(savedGame));
        updateUI();
        console.log("Spiel geladen");
    } else {
        console.log("Kein gespeichertes Spiel gefunden");
    }
}

// Funktion zum Zurücksetzen des Spiels
function resetGame() {
    saveData.money = 0;
    saveData.burgerPrice = 10;
    saveData.speedMultiplier = 1;
    saveData.branches = [{ name: "Hauptfiliale", level: 1, customersServed: 0 }];
    saveData.upgrades = { burgerUpgrade: 0, speedUpgrade: 1 };
    saveData.adsActive = false;
    saveData.currentBranch = 0;
    saveGame();
    updateUI();
}
