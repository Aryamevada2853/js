let player={
    name:"P1:",
    chips:145,
    
}
let sum = 0;
let mssg = "";
let isAlive = false;
let hasBlackJack = false;
// let sumEl = document.querySelector("#sum-el");
let messageel = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl=document.getElementById("name")

playerEl.textContent=player.name+" "+"$"+player.chips



function start() {
    isAlive = true;
    let firstCard = getRandomcard();
    let secCard = getRandomcard();
    cards = [firstCard, secCard];
    sum=firstCard+secCard
    renderGame();
  }



function getRandomcard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}



function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum < 20) {
    mssg = "do you want to draw a new card?";
  } else if (sum === 21) {
    mssg = "wohoo!! you've got a Blackjack!";
    hasBlackJack = true;
  } else {
    mssg = "you're out of the game";
    
    isAlive = false;
  }
  messageel.textContent = mssg;
}
function newcard() {
  console.log("drawing a new card from the deck!");
  if(isAlive===true && hasBlackJack===false){
  let card = getRandomcard();
  sum += card;
  cards.push(card);
  renderGame();
  }
}
