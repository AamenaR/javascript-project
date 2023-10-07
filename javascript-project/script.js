'use strict';
/////// selecting elements ////////
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
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')
// dice
const diceEl = document.querySelector(".dice");

// starting conditions

let scores, activePlayer, currentScore, playing;

const inti= function(){
 scores = [0,0]
 activePlayer = 0;
 currentScore = 0;
 playing = true; // making state variable

    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current1El.textContent=0;

    diceEl.classList.add('hidden')
    player0.classList.remove('player--winner')
    player1.classList.remove('player--active')
    player0.classList.add('player--active')
    player1.classList.remove('player--winner')   
}

inti();



//  refactoring function
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;  //dynamic way 
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0; 
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}


/////// Rolling dice functionality ///////
btnRoll.addEventListener("click", function(){
    if(playing){
    // generating random dice roll
    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);
    // display dice
    diceEl.classList.remove('hidden')
    diceEl.src =`imgs/dice-${dice}.png`; // making img-src-dice rolling dymanic on btn click as per random number

    // checking for rolled 6:
    // active player
    if(dice !== 6){
       currentScore+=dice;
       //current0El.textContent=currentScore; //change later
       document.getElementById(`current--${activePlayer}`).textContent = currentScore; //dynamic way to select or toggle between two players
    }
    // switch to next player
    else{
    switchPlayer();
    }
}
});

/////// button hold functionality ///////
btnHold.addEventListener('click',function() {
    if(playing){
    // Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    // Check if player's score is >= 100
    if(scores[activePlayer] >= 20){
    // finish game
    playing = false;
    diceEl.classList.add("hidden");
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');    
    }
    else{
        //Switch to next player 
        switchPlayer();
    }
}
});

/////// button NewGame functionality ///////
btnNew.addEventListener('click', inti);