let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Eron",
    chips: 0
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " $" + player.chips

function getRandomCard () {
    let randomCard = Math.floor(Math.random() *11) +1
    if (randomCard >10){
        return 10
    }else if (randomCard === 1){
        return 11
    }else {
        return randomCard
    }
}

function startGame () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame (){
    cardsEl.textContent = "Cards: "
    for (let i =0; i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " +sum
    if(sum <= 20) {
        message = "Youre still in the game"
    }else if( sum === 21){
        message = "BlackJack"
    }else {
        message = "You Lost"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard (){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}