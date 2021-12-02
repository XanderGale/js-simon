// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const numbersToGuess = 5
const howManyNumbers = 10
let guessNumbers = getRandomNumbers(numbersToGuess);
console.log(guessNumbers);

guessNumbers.forEach((number) => {
    alert(number);
});


const wrongNumbers = [];
const guessedNumbers = [];
setTimeout(function() {
    guessNumbers.forEach((number) => {
        let userTry = parseInt(prompt('Inserisci un numero che ha detto Simon!'));
        if ( guessNumbers.includes(userTry) && !guessedNumbers.includes(userTry) ) {
            guessedNumbers.push(userTry);
        } else {
            wrongNumbers.push(userTry);
        };
    });

    alert(`Hai indovinato: ${guessedNumbers.length} numeri su ${numbersToGuess}.`);

    alert(`I numeri indovinati sono:
    ${guessedNumbers}`);

    alert(`I numeri sbagliati sono:
    ${wrongNumbers}`);
}, 5000);

// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function getRandomNumbers(numbersToGuess) {
    const rndNumbers = [];
    for(let i = 0; i < numbersToGuess; i++){
        const rndNumber = getRndInteger(1, howManyNumbers);
        // console.log(rndNumber);
        if (!rndNumbers.includes(rndNumber)){
            rndNumbers.push(rndNumber);
        } else {
            i--;
        };
    };

    return rndNumbers;
};