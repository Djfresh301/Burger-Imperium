let money = 0;
let orderReady = false;

// HTML-Elemente
const moneyDisplay = document.getElementById('money');
const orderDisplay = document.getElementById('order');
const feedbackDisplay = document.getElementById('feedback');

// Buttons
const cookButton = document.getElementById('cookButton');
const serveButton = document.getElementById('serveButton');

// Funktionen
function generateOrder() {
  const orders = ['Burger', 'Cheeseburger', 'Veggie Burger'];
  const randomOrder = orders[Math.floor(Math.random() * orders.length)];
  orderDisplay.textContent = randomOrder;
  orderReady = false;
  feedbackDisplay.textContent = `Kunde bestellt einen ${randomOrder}.`;
}

function cookBurger() {
  if (orderReady) {
    feedbackDisplay.textContent = 'Burger ist bereits fertig! Klicke auf „Servieren“.';
  } else {
    feedbackDisplay.textContent = 'Burger wird gekocht...';
    setTimeout(() => {
      orderReady = true;
      feedbackDisplay.textContent = 'Burger ist fertig! Klicke auf „Servieren“.';
    }, 2000); // Zeit für das Kochen
  }
}

function serveBurger() {
  if (!orderReady) {
    feedbackDisplay.textContent = 'Der Burger muss zuerst gekocht werden!';
  } else {
    const earnings = Math.floor(Math.random() * 10) + 5; // Zufällige Einnahmen
    money += earnings;
    moneyDisplay.textContent = money;
    feedbackDisplay.textContent = `Burger serviert! Du hast ${earnings}€ verdient.`;
    generateOrder(); // Neue Bestellung generieren
  }
}

// Event Listener
cookButton.addEventListener('click', cookBurger);
serveButton.addEventListener('click', serveBurger);

// Initiale Bestellung generieren
generateOrder();
