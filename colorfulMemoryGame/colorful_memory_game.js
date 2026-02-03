
// Colorful Memory Game JavaScript Code
// This code implements a simple memory game where players match pairs of colorful cards.

// Shuffle function to randomize card positions
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;
/*  
colors array: This array holds distinct color 
values in strings, representing the colors for 
the cards in the memory match game. 
These colors create pairs for the game.

cards array: Initialized by shuffling and attaching 
the 'colors' array, this 'cards' array holds the color 
values for the cards in the game. The shuffle function employs 
the Fisher-Yates algorithm to randomize the order of the colors 
and then duplicates these colors to create pairs, 
forming the set of cards for gameplay.

selectedCards: This variable acts as a temporary storage 
for the currently selected cards during the game. 
When a player clicks on a card, it gets added to this array 
to enable match comparisons.

score: This variable tracks the player's score throughout the game. 
The score gets incremented whenever the player matches a pair of cards successfully.
 It's updated and displayed to reflect the player's progress and performance.

timeLeft: It represents the time remaining for the player 
to complete the game. Initially set to a specific duration, 
it counts down as the game progresses. When it reaches zero, the game ends.

gameInterval: This variable manages the game timer. 
It's utilized to control the countdown mechanism for 
the game's duration. The interval continuously decrements the 'timeLeft' variable,
 updating the displayed time and triggering the game's end when the time expires.
*/

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

 function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}

/*
It utilizes a 'for…of' loop to iterate over each element (color) in the 'cards' array.
For each color in the 'cards' array:

Inside the loop, it creates a new HTML div element using document.createElement('div'). 
This 'div' element represents a card in the game.

It adds a class 'card' to the newly created 'div' 
element using card.classList.add('card'). This class might c
ontain CSS styles or rules to style the card elements.

It sets the 'dataset.color' attribute of the card 
element to the current color value from the 'cards' array. 
This icon represents the card's hidden color until the player clicks it.

The text content of each card is initially 
set to a question mark ('?') using the card.textContent = '?'. 
This represents that the color of the card is hidden until it's clicked by the player.

Finally, the newly created card element is attached to 
the 'gameContainer' element as a child. This action adds 
each card element to the game interface within the designated container. */