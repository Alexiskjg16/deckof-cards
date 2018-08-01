const PlayerShuffledDeck = () => {
  console.log('player clicked shuffle')
  // shuffle cards between suits and types
  // for each card in deck
  for (let i = 0; i < deck.length; i++) {
    //create a random number between 0-i
    const j=Math.floor(Math.random() * i)
    //swap cards at position i and the random number
    let temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
  console.log(deck)
}

const displayCard = () => {
  const displayCard = deck.pop()
  console.log(displayCard)
  document.querySelector('.LetitDisplay').textContent= displayCard
}

let deck = []

const createPlayerDeck = () => {
  let suitOfCard = ['Hearts', 'Spades', 'Diamonds', 'Clubs']
  let typeOfCard = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
  for (let j = 0; j < suitOfCard.length; j++) {
    for (let i = 0; i < typeOfCard.length; i++) {
      deck.push(typeOfCard[i] + " of " + suitOfCard[j])
    }
  }
  PlayerShuffledDeck()
}


document.addEventListener('DOMContentLoaded', createPlayerDeck)
document.querySelector('.LetitGo').addEventListener('click', displayCard)
document.querySelector('.shuffleButton').addEventListener('click', PlayerShuffledDeck)