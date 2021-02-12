'use strict';

// selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

const init = function() {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	// variable which will let us check whether or not the game is still playing
	playing = true;

	score0El.textContent = 0;
	score1El.textContent = 0;
	current0El.textContent = 0;
	current1El.textContent = 0;

	diceEl.classList.add("hidden");
	document.querySelector(".player--0").classList.remove("player--winner");
	document.querySelector(".player--1").classList.remove("player--winner");
	document.querySelector(".player--1").classList.remove("player--active");
	document.querySelector(".player--0").classList.add("player--active");
}

init();

const switchPlayer = function() {
	document.querySelector(`#current--${activePlayer}`).textContent = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	currentScore = 0;
	player0El.classList.toggle("player--active");
	player1El.classList.toggle("player--active");
};

// rolling dice functionality
btnRoll.addEventListener("click", function() {
	if(playing) {
		// 1. generate a random dice roll
		const dice = Math.trunc(Math.random() * 6) + 1;

		// 2. display the dice
		diceEl.classList.remove("hidden");
		diceEl.src = `dice-${dice}.png`;

		// 3. check for rolled 1; if true, switch player
		if(dice !== 1) {
			// add dice to current score
			currentScore = currentScore + dice;
			document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
		} else {
			// switch to next player
			switchPlayer();
		}
	}
});

// holding the score for the current player
btnHold.addEventListener("click", function() {
	if(playing) {
		// add current score to active player's score
		scores[activePlayer] = scores[activePlayer] + currentScore;
		document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]; 
		
		// check if score is >= 100 (win condition)
		// if yes, finish game
		if(scores[activePlayer] >= 20) {
			playing = false;
			document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
			document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
			diceEl.classList.add("hidden");
		} else {
			// if not, hand over the queue
			switchPlayer(); 
		}
	}
});

btnNew.addEventListener("click", init);