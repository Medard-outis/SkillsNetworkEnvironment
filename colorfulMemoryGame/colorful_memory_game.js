
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


  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/*
Array parameter: It takes an array as an argument, 
which contains yet to be shuffled elements.

Shuffling process using loop through the array: 
The function starts by initiating a 'for' loop that iterates backward 
through the array starting from the last index (let i = array.length - 1; i > 0; i–).

Random index selection: Within each iteration, 
it generates a random index 'j' using Math.floor(Math.random() * (i + 1)). 
This 'j' represents a random index within the array.

Swapping elements: It then swaps the elements at the 'i' and 'j' 
indices using array destructuring assignment: [array[i], array[j]] = [array[j], array[i]]. 
This line efficiently swaps the values at 
positions 'i' and 'j' without requiring a temporary variable.

Continuing the loop: The loop continues until it finishes iterating 
through the entire array, shuffling elements along the way.

Returning the shuffled array: Once the loop is complete, 
the function returns the array with its elements rearranged into a random order. */

function handleCardClick(event) {
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
/*
Event Target using const card = event.target;: This line retrieves the element that triggered the event (in this case, a clicked card) and assigns it to the 'card' variable.

Checking the card: if (!card.classList.contains('card') || card.classList.contains('matched')) { return; } This 'if' statement checks whether the clicked element is a card and if it's already matched. If either condition is true:

If the element is not a card or has already matched, the function returns early, ignoring any further actions for this particular click.
Revealing the card:

card.textContent = card.dataset.color;: It sets the text content of the clicked card to the value stored in its 'dataset.color'. This action reveals the card's color by changing the text content to the color value.

card.style.backgroundColor = card.dataset.color;: Changes the card's background color to match the revealed color.

Handling selected cards:

selectedCards.push(card);: Adds the clicked card to the 'selectedCards' array, indicating that it's one of the cards currently chosen by the player.
Checking for matches:

if (selectedCards.length === 2) { setTimeout(checkMatch, 500); }: Checks if two cards have been selected. If two cards have been chosen, it uses 'setTimeout()' to delay the execution of the 'checkMatch()' function by 500 milliseconds. This brief delay allows the player to see both selected cards before their comparison briefly. */

function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    score += 2;
    scoreElement.textContent = `Score: ${score}`;
    } else {
    card1.textContent = '?';
    card2.textContent = '?';
    card1.style.backgroundColor = '#ddd';
    card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

/*
Destructuring selected cards:

const [card1, card2] = selectedCards;: This line uses array destructuring to assign the first two elements of the 'selectedCards' array to 'card1' and 'card2'. These variables represent the two cards selected by the player for comparison.
Comparing card colors:

if (card1.dataset.color === card2.dataset.color) { ... }: This checks if the color value stored in the 'dataset.color' attribute of 'card1' matches the color value of 'card2'.

If the colors match: It adds the class 'matched' to both cards using 'classList.add('matched')', marking them as matched pairs in the game.

Increases the 'score' by 2 points, as the player successfully matched a pair.

Updates the 'scoreElement.textContent' to display the updated score to the player.

Handling non-matching cards: If the colors of the two selected cards don't match, it resets the text content of both cards to a question mark ('?'), hiding their colors again.

Sets the background color of both cards to a default color ('#ddd'), providing a visual cue that the selected cards didn't match.
Resetting selection:

selectedCards = [];: It clears the 'selectedCards' array to reset it for the next set of card selections. This action ensures the player can select two new cards after the comparison.

*/

function startGame() {
            let timeLeft = 30;
            startbtn.disabled = true;
            score = 0; // Reset score to zero
            scoreElement.textContent = `Score: ${score}`;
            startGameTimer(timeLeft);
            cards = shuffle(colors.concat(colors));
            selectedCards = [];
            gameContainer.innerHTML = '';
            generateCards();
            gameContainer.addEventListener('click', handleCardClick);
        }

function startGameTimer(timeLeft) {
            timerElement.textContent = `Time Left: ${timeLeft}`;
            gameInterval = setInterval(() => {
                timeLeft--;
                timerElement.textContent = `Time Left: ${timeLeft}`;

                if (timeLeft === 0) {
                    clearInterval(gameInterval);
                    let timeLeft = 30;
                    alert('Game Over!');
                    startbtn.disabled = false;
                }
            }, 1000);
        }