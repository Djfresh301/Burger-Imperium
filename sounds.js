// sound.js
let sounds = {
    crateOpen: new Audio('assets/sounds/crate_open.mp3'),
    burgerCook: new Audio('assets/sounds/burger_cook.mp3'),
    adPurchase: new Audio('assets/sounds/ad_purchase.mp3'),
};

// Funktion, um einen Sound abzuspielen
function playSound(soundName) {
    if (sounds[soundName]) {
        sounds[soundName].play();
    } else {
        console.warn(`Sound "${soundName}" wurde nicht gefunden.`);
    }
}

// Funktion, um den Sound zu stoppen
function stopSound(soundName) {
    if (sounds[soundName]) {
        sounds[soundName].pause();
        sounds[soundName].currentTime = 0;  // Setze die Zeit auf Anfang zurück
    }
}

// Funktion, um den Sound zu konfigurieren (z. B. Lautstärke anpassen)
function setSoundVolume(soundName, volume) {
    if (sounds[soundName]) {
        sounds[soundName].volume = volume;  // Volume von 0 (stumm) bis 1 (maximal)
    }
}

// Beispiel für das Abspielen von Sounds
// Ein Crate öffnen
function openCrate() {
    playSound('crateOpen');
    // Rest der Logik für das Öffnen des Crates...
}

// Burger kochen
function cookBurger() {
    playSound('burgerCook');
    // Logik für das Burger Kochen...
}

// Werbung kaufen
function buyAd() {
    playSound('adPurchase');
    // Logik für das Kaufen von Werbung...
}
