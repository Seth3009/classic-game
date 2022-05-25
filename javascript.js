function computerPlay(){
    const num = Math.floor(Math.random()*3); 
    const arr = ['Rock','Paper','Scissors'];
    return arr[num];
}

function playRound(playerSelection, computerSelection) {
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    
    if(c===p) {
        return 'Draw!!!'
    }
    else {
        switch (p) {
            case 'rock':
                if(c === 'paper') {return "You Lose! Paper beats Rock"};
                if(c === 'scissors') {return "You Win! Rock beats Scissors"};
            case 'paper':
                if(c === 'scissors') {return "You Lose! Scissors beats Paper"};
                if(c === 'rock') {return "You Win! Paper beats Rock"};
            case 'scissors':
                if(c === 'paper') {return "You Win! Scissors beats Paper"};
                if(c === 'rock') {return "You Lose! Rock beats Scissors"};
        }
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));