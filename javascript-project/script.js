'use strict';
// selecting elements
// score
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
// currentScore
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
// players
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
// btns
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
// dice
const diceEl = document.querySelector(".dice");

// starting conditions
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add("hidden");

let activePlayer = 0;
let currentScore = 0;


// Rolling dice functionality
btnRoll.addEventListener("click", function(){
    // generating random dice roll
    const dice =Math.trunc(Math.random()*6)+1;
    console.log(dice);
    // display dice
    diceEl.classList.remove('hidden')
    diceEl.src =`imgs/dice-${dice}.png`;
    // checking for rolled 6:
    // active player
    if(dice !== 6){
       currentScore+=dice;
       document.getElementById(`current--${activePlayer}`).textContent =currentScore; //dynamic way to select or toggle between two players
    //    current0El.textContent=currentScore; //change later
    }
    // switch to next player
    else{
    document.getElementById(`current--${activePlayer}`).textContent = 0;  //dynamic way 
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0; 
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
    }
})
