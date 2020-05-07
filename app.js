//scores, roundScore, activePlayer, dice

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
              
    //1. Random number
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    
    //2. Display dice image by using random number
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + randomNumber + '.png';

    //3. Update the random score if the dice score is not 1
    if (randomNumber !== 1) {
           //Add score
            roundScore = roundScore + randomNumber
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
        //Next player
        nextPlayer();
    }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying) {
        
     //Add currentscore to global score
      scores[activePlayer] = scores[activePlayer] + roundScore;

      //Update the UI
       document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      
     //Check if player won the game 
     if (scores[activePlayer] >= 20) {
           document.querySelector('#name-' + activePlayer).textContent = 'Winner';
           document.querySelector('.dice').style.display = 'none';
           document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
           document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
           gamePlaying = false;
     } else {
         
      //Next player 
       nextPlayer();
 
     }
    }
});
//Next player
 function nextPlayer() {
    
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
   
       document.querySelector('#current-0').textContent = '0';
       document.querySelector('#current-1').textContent = '0';

       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');

       document.querySelector('.dice').style.display = 'none';
 }

//Using init function
document.querySelector('.btn-new').addEventListener('click', init);

// init function
function init() {

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
     
    document.querySelector('.dice').style.display = 'none';

    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
   
    //new game
    document.querySelector('#name-0').textContent = 'Player 1'; 
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}











