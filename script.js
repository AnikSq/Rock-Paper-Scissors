let value = 0 ;
let playerWin = 0;
let computerWin = 0;
let playerWeapon = "";
let computerChoice = "";


function randomNumber() { 

    value =  Math.floor(Math.random() * (4 - 1) + 1 );
}




function computerPlay(){


    
    randomNumber()


    switch(value){

        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }

}

function playerChoice(){

    playerWeapon = prompt("Please enter your weapon")
}


function Game(){
    

    let gameEnd = false

    while(gameEnd == false){
    
        computerPlay()
        playerChoice()
        playerWeapon = playerWeapon.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if(playerWeapon === computerChoice){
            console.log("It's a Tie! , Do it again!")
        }
        else if (playerWeapon == "rock" && computerChoice == "scissors"){
            console.log("You Win!")
           let answer = prompt("Would you like to play again?")
            if (answer.toLocaleLowerCase() === "yes" || answer.toLocaleLowerCase() === "y"){
                gameEnd = false
            }
            else{
                gameEnd = true
            }
        }
        else if (playerWeapon == "scissors" && computerChoice == "paper"){
            console.log("You Win!")
            let answer = prompt("Would you like to play again?")
            if (answer.toLocaleLowerCase() === "yes" || answer.toLocaleLowerCase() === "y"){
                gameEnd = false
            }
            else{
                gameEnd = true
            }
        }
        else if (playerWeapon == "paper" && computerChoice == "rock"){
            console.log("You Win!")
            let answer = prompt("Would you like to play again?")
            if (answer.toLocaleLowerCase() === "yes" || answer.toLocaleLowerCase() === "y"){
                gameEnd = false
            }
            else{
                gameEnd = true
            }
        }
        else{
            console.log("You Lose")
            let answer = prompt("Would you like to play again?")
            if (answer.toLocaleLowerCase() === "yes" || answer.toLocaleLowerCase() === "y"){
                gameEnd = false
            }
            else{
                gameEnd = true
            }
        }

    }
    
}

Game()

