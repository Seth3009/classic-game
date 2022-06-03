let round = 1;
let pScore = 0;
let cScore = 0;
const pScr = document.querySelector('.pScore');
const cScr = document.querySelector('.cScore');
const player = document.querySelector('.player-hand');
const computer = document.querySelector('.computer-hand');
const board = document.querySelector('.scoreboard');

function computerPlay(){
    const num = Math.floor(Math.random()*3); 
    const arr = ['Rock','Paper','Scissors'];
    return arr[num];
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    let win = false;
    if(round <= 5){
        try {
            let p = playerSelection.toLowerCase();
            let c = computerSelection.toLowerCase();
        
            if(c===p) {
                result = 'Draw!!!';
            }
            else {
                
                if(p === 'rock' && c === 'paper') {result = "You Lose! Paper beats Rock"};
                if(p === 'rock' && c === 'scissors') {
                    result =  "You Win! Rock beats Scissors";
                    win = true;
                };
                if(p === 'paper' && c === 'scissors') {result =  "You Lose! Scissors beats Paper"};
                if(p === 'paper' && c === 'rock') {
                    result =  "You Win! Paper beats Rock";
                    win = true;
                }
                if(p === 'scissors' && c === 'paper') {
                    result = "You Win! Scissors beats Paper";
                    win = true;
                }
                if(p === 'scissors' && c === 'rock') {result =  "You Lose! Rock beats Scissors"};
                win ? pScore++ : cScore++;
            }
            
            createResult(p, c, result);
            if(round == 5) {pScore === cScore ? createStamp('Draw!!!') : pScore > cScore ? createStamp("You Win!!!") : createStamp("You Lose!!!");}
        } catch(e) {
            console.log(e);
        }
        
        round++;
    } 
}

function showImage(p, c){
    // player
    let pImg = document.createElement('img');
    player.appendChild(pImg);
    pImg.src = `./${p}.jpg`;
    let cImg = document.createElement('img');
    computer.appendChild(cImg);
    cImg.src = `./${c}.jpg`;
    
}

function createResult(p, c, text){
    showImage(p,c);
    let d = document.createElement('div');
    pScr.textContent = pScore;
    cScr.textContent = cScore;
    board.appendChild(d);
    d.classList.add('result');
    d.textContent = text;
    
}

function createStamp (text){
    let b = document.querySelector('.board');
    let s = document.createElement('div');
    b.appendChild(s);
    s.setAttribute('id','stamp');
    s.textContent = text;
}

function resetGame(){
    round = 1;    
    let pImg = player.querySelectorAll('img');
    let cImg = computer.querySelectorAll('img');
    let result = board.querySelectorAll('.result');
    let score = document.querySelectorAll('.score');
    pImg.forEach(p => p.remove());
    cImg.forEach(c => c.remove());
    result.forEach(r => r.remove());
    pScr.textContent = '0';
    cScr.textContent = '0';
    pScore = 0;
    cScore = 0;
    if(document.querySelector('#stamp')) document.querySelector('#stamp').remove();
}

const hands = document.querySelectorAll('.btn');
hands.forEach(hand => hand.addEventListener('click', hand.id == 'reset' ? resetGame : () => playRound(hand.id, computerPlay())));
// game();