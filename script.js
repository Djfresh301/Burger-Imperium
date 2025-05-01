let money = 0;
let burgerPrice = 10;
let speedMultiplier = 1;
let currentBranch = 0;
let branches = [{ name: "Filiale 1", level: 1, multiplier: 1 }];
let adBoost = false;
let progressBarInterval;
let progressDuration = 5000;  // Standardzeit für Burgerzubereitung (5 Sekunden)

// Aktuelle Anzeige aktualisieren
function updateUI() {
    document.getElementById('money').innerText = `💰 Geld: ${money}`;
    document.getElementById('currentBranch').innerText = `🏢 Filiale: ${branches[currentBranch].name} (Level: ${branches[currentBranch].level})`;
}

// Burger zubereiten
function makeBurger() {
    let income = burgerPrice;
    if (adBoost) income *= 2;
    money += income;

    // Fortschrittsanzeige für Burgerzubereitung
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('progressContainer').style.display = 'block';

    let progress = 0;
    progressBarInterval = setInterval(() => {
        progress += 2;
        document.getElementById('progressBar').style.width = `${progress}%`;
        if (progress >= 100) {
            clearInterval(progressBarInterval);
            document.getElementById('progressContainer').style.display = 'none';
            spawnCustomer();
            updateUI();
        }
    }, progressDuration / 50);
}

// Kunden erscheinen lassen
function spawnCustomer() {
    const customersDiv = document.getElementById('customers');
    const customer = document.createElement('div');
    customer.innerText = "🧍 Kunde möchte einen Burger!";
    customer.style.marginTop = "10px";
    customersDiv.appendChild(customer);

    setTimeout(() => {
        customersDiv.removeChild(customer);
    }, 3000 * speedMultiplier);
}

// Crate öffnen und Animationen anzeigen
function openCrate() {
    const rand = Math.random();
    const crateEffect = document.getElementById('crateEffect');
    
    crateEffect.style.display = 'block';
    crateEffect.classList.add('crate-visual');
    
    if (rand < 0.6) {
        crateEffect.style.backgroundColor = '#b0e0e6'; // Gewöhnlich
        alert("👕 Du hast ein gewöhnliches Upgrade erhalten!");
    } else if (rand < 0.85) {
        crateEffect.style.backgroundColor = '#ffd700'; // Selten
        alert("🌟 Du hast ein seltenes Upgrade erhalten!");
    } else if (rand < 0.95) {
        crateEffect.style.backgroundColor = '#ff6347'; // Episch
        alert("💥 Du hast ein episches Upgrade erhalten!");
    } else {
        crateEffect.style.backgroundColor = '#800080'; // Legende
        alert("🌈 Du hast ein legendäres Upgrade erhalten!");
    }

    setTimeout(() => {
        crateEffect.style.display = 'none';
        crateEffect.classList.remove('crate-visual');
    }, 1000);
}

// Werbung schalten
function runAd() {
    adBoost = true;
    document.getElementById('advertisement').style.display = 'block';
    setTimeout(() => {
        adBoost = false;
        document.getElementById('advertisement').style.display = 'none';
    }, 10000);
}

// Filiale upgraden
function upgradeBranch() {
    const upgradeCost = branches[currentBranch].level * 100;
    if (money >= upgradeCost) {
        money -= upgradeCost;
        branches[currentBranch].level++;
        branches[currentBranch].multiplier += 0.5;
        alert(`🏢 Filiale ${branches[currentBranch].name} auf Level ${branches[currentBranch].level} geupgradet!`);
        updateUI();
    } else {
        alert("Nicht genug Geld für Upgrade!");
    }
}

// Neue Filiale eröffnen
function openNewBranch() {
    const cost = 200 + branches.length * 100;
    if (money >= cost) {
        money -= cost;
        const newName = prompt("Name der neuen Filiale?") || `Filiale ${branches.length + 1}`;
        branches.push({ name: newName, level: 1, multiplier: 1 });
        currentBranch = branches.length - 1;
        alert(`➕ Neue Filiale '${newName}' eröffnet!`);
        updateUI();
    } else {
        alert("Nicht genug Geld für eine neue Filiale!");
    }
}

updateUI();
