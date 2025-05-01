// crate.js
const crateRarities = ['gewöhnlich', 'selten', 'episch', 'mythisch', 'legendär'];

function openCrate() {
    const rarity = getRandomRarity();
    const crateElement = createCrateElement(rarity);

    // Animation starten
    animateCrateOpening(crateElement, rarity);
}

function getRandomRarity() {
    const rand = Math.random();
    if (rand < 0.2) return 'gewöhnlich';
    if (rand < 0.4) return 'selten';
    if (rand < 0.6) return 'episch';
    if (rand < 0.8) return 'mythisch';
    return 'legendär';
}

function createCrateElement(rarity) {
    const crateElement = document.createElement('div');
    crateElement.classList.add('crate');
    crateElement.classList.add(rarity); // Setzt die Farbe je nach Seltenheit
    document.body.appendChild(crateElement);
    return crateElement;
}

function animateCrateOpening(crateElement, rarity) {
    crateElement.classList.add('open');
    crateElement.addEventListener('animationend', () => {
        // Belohnung basierend auf der Seltenheit
        showCrateReward(rarity);
        crateElement.remove();
    });
}

function showCrateReward(rarity) {
    let rewardMessage = '';
    switch (rarity) {
        case 'gewöhnlich':
            rewardMessage = 'Du hast ein gewöhnliches Item erhalten!';
            break;
        case 'selten':
            rewardMessage = 'Du hast ein seltenes Item erhalten!';
            break;
        case 'episch':
            rewardMessage = 'Du hast ein episches Item erhalten!';
            break;
        case 'mythisch':
            rewardMessage = 'Du hast ein mythisches Item erhalten!';
            break;
        case 'legendär':
            rewardMessage = 'Du hast ein legendäres Item erhalten!';
            break;
    }
    alert(rewardMessage);
}
