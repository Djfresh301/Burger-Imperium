// config.js

const config = {
    // Grundlegende Spielsettings
    initialMoney: 1000,  // Startgeld
    initialCrates: 5,    // Startanzahl der Crates
    initialBranches: 1,  // Startanzahl der Filialen
    initialBurgerTime: 10,  // Startzeit für die Zubereitung eines Burgers in Sekunden
    maxCrates: 10,       // Maximale Anzahl an Crates
    maxBranches: 10,     // Maximale Anzahl an Filialen

    // Lautstärke-Einstellungen
    soundVolume: 0.7,    // Standardlautstärke (von 0 bis 1)
    musicVolume: 0.5,    // Musiklautstärke

    // Weitere Spiel-Einstellungen
    themeColor: "#ff6347", // Standardfarbe des Spiels (Tomatenrot)
    gameDifficulty: "normal",  // Standard-Schwierigkeitsgrad ("easy", "normal", "hard")

    // Konfigurationen für Upgrades
    upgradeCostMultiplier: 1.2,  // Multiplizierer für die Kosten von Upgrades

    // Weitere Anpassungen
    autoSaveInterval: 300000,   // Automatisches Speichern alle 5 Minuten (in Millisekunden)
};

// Funktion, um die Konfiguration zu laden (wird später verwendet, um Einstellungen zu übernehmen)
function loadConfig() {
    // Hier kannst du die gespeicherten Einstellungen laden (z.B. aus localStorage oder einer Datei)
    console.log('Lade Konfiguration:', config);
}

// Funktion, um eine Konfiguration zu ändern
function setConfig(key, value) {
    if (config[key] !== undefined) {
        config[key] = value;
        console.log(`Konfiguration geändert: ${key} = ${value}`);
    } else {
        console.warn(`Unbekannter Konfigurationsschlüssel: ${key}`);
    }
}

// Beim Start des Spiels die Konfiguration laden
loadConfig();
