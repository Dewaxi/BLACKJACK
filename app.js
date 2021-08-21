// select element
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let prayerEl = document.getElementById("prayer-el");


// variables
let prayer = {
    name: "Samuel",
    chip: 150
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";


prayerEl.textContent = prayer.name +  ": $" + prayer.chip;
// Random card function
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    
    if (randomNumber > 10) {
        return 11
    } else if (randomNumber === 1) {
        return 10
    } else {
        return randomNumber;
    }
    
}


// calling the renderGame
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
  
    renderGame();
}


function renderGame() {
    cardEl.textContent = "Card: ";
    // loop to render all cards
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";   
    }
    sumEl.textContent = "Sum: " + sum;  
    if (sum <= 20) {
        message = "Do you want another card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    
    }
    messageEl.textContent = message;
    
}


function newCard() {
    // condition to have newCards
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard();
        sum += thirdCard;
        // push the thirdCard to the cards Array
        cards.push(thirdCard);
        // display the Cards
        renderGame();
    }
    
}

