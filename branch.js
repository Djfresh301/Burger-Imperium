// branch.js
let branches = [];  // Array für alle Filialen

// Funktion, um eine neue Filiale zu erstellen
function createBranch(name, location) {
    const newBranch = {
        name: name,
        location: location,
        employees: [],
        upgrades: []
    };
    branches.push(newBranch);
    updateBranchDisplay(newBranch);
    showBranchAnimation(newBranch);
}

// Funktion zum Erstellen und Anzeigen einer neuen Filiale
function updateBranchDisplay(branch) {
    const branchContainer = document.createElement('div');
    branchContainer.classList.add('branch');
    branchContainer.innerHTML = `
        <h3>${branch.name}</h3>
        <p>Standort: ${branch.location}</p>
        <button onclick="upgradeBranch('${branch.name}')">Filiale upgraden</button>
    `;
    document.getElementById('branches').appendChild(branchContainer);
}

// Animation für die Eröffnung einer neuen Filiale
function showBranchAnimation(branch) {
    const branchElement = document.querySelector(`.branch:last-child`);
    branchElement.classList.add('branch-animation');
    
    // Wenn die Animation vorbei ist, kannst du eine Nachricht oder ein anderes Feedback geben
    branchElement.addEventListener('animationend', () => {
        alert(`Filiale "${branch.name}" erfolgreich eröffnet!`);
    });
}

// Funktion, um ein Filial-Upgrade durchzuführen
function upgradeBranch(branchName) {
    const branch = branches.find(b => b.name === branchName);
    if (branch) {
        branch.upgrades.push('Upgrade');
        alert(`Filiale "${branch.name}" wurde erfolgreich geupgraded!`);
        updateBranchDisplay(branch);
    }
}
