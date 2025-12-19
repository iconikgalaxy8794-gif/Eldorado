// Variables pour gérer les étapes
let currentStep = 1;
const totalSteps = 6;

// Fonction pour changer d'étape
function showStep(stepNumber) {
    // Cacher toutes les étapes
    for (let i = 1; i <= totalSteps; i++) {
        const step = document.getElementById(`step${i}`);
        if (step) {
            step.classList.remove('active');
        }
    }
    
    // Afficher l'étape actuelle
    const currentStepElement = document.getElementById(`step${stepNumber}`);
    if (currentStepElement) {
        currentStepElement.classList.add('active');
    }
    
    currentStep = stepNumber;
}

// Étape 1: Bouton "Sell my brainrot"
document.getElementById('sellButton').addEventListener('click', function() {
    showStep(2);
});

// Étape 2: Bouton "Next"
document.getElementById('nextButton').addEventListener('click', function() {
    const brainrotInput = document.getElementById('brainrotInput').value.trim();
    if (brainrotInput === '') {
        alert('Please enter your brainrot before continuing!');
        return;
    }
    showStep(3);
});

// Étape 3: Lien YouTube
document.getElementById('youtubeLink').addEventListener('click', function(e) {
    // Laisser le lien s'ouvrir normalement
    // Après un court délai, passer à l'étape suivante
    setTimeout(function() {
        showStep(4);
    }, 500);
});

// Étape 4: Soumission du RIB
document.getElementById('submitRibButton').addEventListener('click', function() {
    const ribInput = document.getElementById('ribInput').value.trim();
    if (ribInput === '') {
        alert('Please enter your RIB before continuing!');
        return;
    }
    showStep(5);
});

// Étape 5: Bouton "Done Command"
document.getElementById('doneButton').addEventListener('click', function() {
    showStep(6);
});

// Initialisation: afficher l'étape 1
showStep(1);

