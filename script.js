let money = 0;
let burgerPrice = 10;
let speedMultiplier = 1;
let adBoost = false;
let branches = [{ name: "Filiale 1", level: 1, multiplier: 1 }];
let currentBranch = 0;

function updateMoney() {
  document.getElementById('money').innerText = `💰 Geld: ${money}`;
}

function updateBranch() {
  document.getElementById('currentBranch').innerText = `🏢 Aktuelle Filiale: ${branches[currentBranch].name} (Level: ${branches[currentBranch].level})`;
}

function makeBurger() {
  let income = burgerPrice * branches[currentBranch].multiplier;
  if (adBoost) income *= 2; // Werbe-Effekt: doppelter Erlös
  money += income;
  updateMoney();
  spawnCustomer();
}

function openCrate() {
  const rand = Math.random();
  if (rand < 0.4) {
    burgerPrice += 3;
    alert("💥 Neuer Grill! Burgerpreis +3!");
  } else if (rand < 0.8) {
    speedMultiplier *= 0.85;
    alert("⚙️ Neue Maschine! Burger schneller zubereitet!");
  } else {
    const rarities = ["selten", "episch", "legendär"];
    const chosen = rarities[Math.floor(Math.random() * rarities.length)];
    alert(`👩‍🍳 Du hast einen ${chosen} Mitarbeiter gewonnen!`);
    if (chosen === "legendär") {
      burgerPrice += 10;
      speedMultiplier *= 0.7;
    }
  }
}

function runAd() {
  adBoost = true;
  alert("📢 Werbung aktiviert! Doppelte Einnahmen für 10 Sekunden!");
  setTimeout(() => {
    adBoost = false;
    alert("📢 Werbeeffekt ist vorbei.");
  }, 10000);
}

function enterLab() {
  document.getElementById('lab').style.display = 'block';
}

function upgradeSpeed() {
  speedMultiplier *= 0.8;
  alert("🚀 Deine Zubereitungsgeschwindigkeit wurde verbessert!");
}

function increaseBurgerPrice() {
  burgerPrice += 5;
  alert("💸 Burgerpreis erhöht um 5!");
}

function spawnCustomer() {
  const customersDiv = document.getElementById('customers');
  const customer = document.createElement('div');
  customer.classList.add('customer'); // Füge die Klasse für die Animation hinzu
  customer.innerText = "🧍 Neuer Kunde!";
  customersDiv.appendChild(customer);

  setTimeout(() => {
    customersDiv.removeChild(customer);
  }, 3000 * speedMultiplier); // Entfernt den Kunden nach der Animation
}

function upgradeBranch() {
  const upgradeCost = branches[currentBranch].level * 100;
  if (money >= upgradeCost) {
    money -= upgradeCost;
    branches[currentBranch].level++;
    branches[currentBranch].multiplier += 0.5;
    alert(`🏢 ${branches[currentBranch].name} wurde aufgewertet! (Level: ${branches[currentBranch].level})`);
    updateMoney();
    updateBranch();
  } else {
    alert("Nicht genug Geld für Upgrade!");
  }
}

function openNewBranch() {
  const cost = 200 + branches.length * 100;
  if (money >= cost) {
    money -= cost;
    const newName = prompt("Name der neuen Filiale?") || `Filiale ${branches.length + 1}`;
    branches.push({ name: newName, level: 1, multiplier: 1 });
    currentBranch = branches.length - 1;
    alert(`➕ Neue Filiale '${newName}' eröffnet!`);
    updateMoney();
    updateBranch();
  } else {
    alert("Nicht genug Geld für eine neue Filiale!");
  }
}

function updateUI() {
  updateMoney();
  updateBranch();
}

updateUI();

