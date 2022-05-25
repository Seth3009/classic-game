function computerPlay(){
    const num = Math.floor(Math.random()*3); 
    const arr = ['Rock','Paper','Scissors'];
    return arr[num];
}

function playRound(playerSelection, computerSelection) {
    try {
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
    } catch(e) {
        console.log(e)
    }
}

function game(){
    for (let i = 1; i < 6; i++){
        const playerSelection = playerHand();
        const computerSelection = computerPlay();
        if(playerSelection === undefined){
            console.log("Game " + i + ": " + "Unknown hand form, you Lose!")
            console.log("============================");
        } else {
        console.log("Player hand: " + playerSelection);
        console.log("Bot hand: " + computerSelection);
        console.log("Game " + i + ": " + playRound(playerSelection, computerSelection));
        console.log("============================");
    }}
}

function playerHand(){
    
        let hand = window.prompt("Show me your hand! (1=Rock, 2=Paper, 3=Scissors)");
        let arr = ['Rock','Paper','Scissors'];
        if(hand > 0 && hand < 4){
            return arr[hand - 1]
        } else {
            window.alert("Only 1 - 3 are allowed!"); 
        }
    
}


game();