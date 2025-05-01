// script.js

// Globale Variablen
let money = 1000;                 // Startgeld
let crates = 5;                   // Startanzahl der Crates
let branches = 1;                 // Startanzahl der Filialen
let burgerTime = 10;              // Zubereitungszeit für einen Burger (in Sekunden)
let upgradeCostMultiplier = 1.2;  // Multiplizierer für Upgrade-Kosten
let soundVolume = 0.7;            // Lautstärke für Soundeffekte
let musicVolume = 0.5;            // Lautstärke für Musik
let autoSaveInterval = 300000;    // Automatisches Speichern alle 5 Minuten (in Millisekunden)
let gameDifficulty = 'normal';    // Spiel-Schwierigkeitsgrad

// Sounds und Assets
let crateSound = new Audio('assets/sounds/crate_open.mp3');
let burgerSound = new Audio('assets/sounds/burger_cooked.mp3');

// Lade Konfiguration (config.js)
function loadConfig() {
    // Beispiel: Lautstärkeregelungen aus der Konfiguration laden
    if (localStorage.getItem('soundVolume')) {
        soundVolume = localStorage.getItem('soundVolume');
        musicVolume = localStorage.getItem('musicVolume');
    }
    updateGameSettings();
}

// Spieleinstellungen aktualisieren
function updateGameSettings() {
    // Setze Lautstärken
    crateSound.volume = soundVolume;
    burgerSound.volume = musicVolume;
}

// Neues Crate öffnen (mit Animation)
function openCrate() {
    // Füge visuelle Effekte hinzu, z.B. ein Crate, das aufspringt
    let crateElement = document.createElement('div');
    crateElement.classList.add('crate-animation');
    document.body.appendChild(crateElement);
    
    // Bestimme die Seltenheit des Crates
    let rarity = getRandomRarity();
    crateElement.style.backgroundColor = getRarityColor(rarity);
    
    // Spiele das Crate Soundeffekt ab
    crateSound.play();

    // Simuliere das Öffnen des Crates
    setTimeout(() => {
        alert('Du hast ein ' + rarity + ' Crate geöffnet!');
    }, 1000);
}

// Zubereitung eines Burgers (wird durch ein Upgrade beschleunigt)
function cookBurger() {
    console.log(`Burger wird in ${burgerTime} Sekunden zubereitet...`);
    
    setTimeout(() => {
        console.log("Burger ist fertig!");
        burgerSound.play();
    }, burgerTime * 1000);
}

// Ein neues Upgrade kaufen (z.B. für schnelleres Burgerkochen)
function buyUpgrade(upgradeType) {
    let upgradeCost = calculateUpgradeCost();
    if (money >= upgradeCost) {
        money -= upgradeCost;
        applyUpgrade(upgradeType);
        alert(`${upgradeType} Upgrade gekauft!`);
    } else {
        alert("Nicht genug Geld!");
    }
}

// Upgrade-Kosten berechnen
function calculateUpgradeCost() {
    return 100 * upgradeCostMultiplier;
}

// Upgrade anwenden
function applyUpgrade(upgradeType) {
    switch (upgradeType) {
        case 'burgerSpeed':
            burgerTime -= 1; // Zubereitungszeit verringern
            break;
        default:
            console.log('Unbekanntes Upgrade!');
    }
}

// Neue Filiale eröffnen
function openNewBranch() {
    if (money >= 500) {
        branches++;
        money -= 500;
        console.log(`Filiale eröffnet! Jetzt hast du ${branches} Filialen.`);
        updateBranchUI();
    } else {
        alert("Nicht genug Geld, um eine neue Filiale zu eröffnen.");
    }
}

// Filialen-UI aktualisieren
function updateBranchUI() {
    const branchElement = document.getElementById('branch-count');
    branchElement.textContent = `Filialen: ${branches}`;
}

// Die gesamte Benutzeroberfläche (UI) aktualisieren
function updateUI() {
    document.getElementById('money-display').textContent = `Geld: $${money}`;
    document.getElementById('crate-count').textContent = `Crates: ${crates}`;
}

// Zufällige Seltenheit eines Crates ermitteln
function getRandomRarity() {
    const rarities = ['gewöhnlich', 'selten', 'episch', 'mythisch', 'legendär'];
    return rarities[Math.floor(Math.random() * rarities.length)];
}

// Seltenheit farblich codieren
function getRarityColor(rarity) {
    switch (rarity) {
        case 'gewöhnlich':
            return '#b0b0b0'; // Grau
        case 'selten':
            return '#00ff00'; // Grün
        case 'episch':
            return '#ff00ff'; // Lila
        case 'mythisch':
            return '#0000ff'; // Blau
        case 'legendär':
            return '#ffcc00'; // Gold
        default:
            return '#ffffff'; // Weiß
    }
}

// Autosave-Funktion alle 5 Minuten
function autoSave() {
    setInterval(() => {
        saveGameData();
        console.log('Spiel automatisch gespeichert!');
    }, autoSaveInterval);
}

// Spielstände speichern
function saveGameData() {
    const gameData = {
        money: money,
        crates: crates,
        branches: branches,
        burgerTime: burgerTime,
        gameDifficulty: gameDifficulty
    };
    localStorage.setItem('gameData', JSON.stringify(gameData));
}

// Spielstand laden
function loadGameData() {
    const savedData = localStorage.getItem('gameData');
    if (savedData) {
        const gameData = JSON.parse(savedData);
        money = gameData.money;
        crates = gameData.crates;
        branches = gameData.branches;
        burgerTime = gameData.burgerTime;
        gameDifficulty = gameData.gameDifficulty;
        console.log('Spielstand geladen!');
    }
}

// Spiel initialisieren
function initializeGame() {
    loadConfig();
    loadGameData();
    autoSave();

    // UI-Elemente anzeigen
    updateUI();
}

// Starte das Spiel
initializeGame();
