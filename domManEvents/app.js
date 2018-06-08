/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0; //0 first player and 1 second player



// document.querySelector('#current-' + activePlayer).textContent = dice; //textContent allows you to change the text within a DOM element
// document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>'; //would allow you to set HTML instead of just text

var x = document.querySelector('#score-0').textContent; //allows you to grab the content of what is there so this is the getter
console.log(x);

document.querySelector('.dice').style.display = 'none'; //this grabs the dice class and sets the style display to none, you can use style.cssStyle to change any CSS
document.getElementById('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent ='0';
// events: notifactions that are sent to notify the code that somehting happened on the webpage. Example: clicking a button, resizing the window, scrolloing down or pressing a key
//event listener: a function that performs an action based on a certain event. It waits for a specific event to happen.


document.querySelector('.btn-roll').addEventListener('click', function(){
    //this is an annonymous function, it has no name and can't be called from anywhere else but by this click
    //1. random Number
    var dice = Math.floor(Math.random() * 6 ) + 1;
    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //3: update the round score if the rolled number was not a 1


}); //on addEventlistener you have the event first and the function to run, you can also run the function directly there
