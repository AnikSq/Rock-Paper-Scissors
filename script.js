let value = 0 ;
let playerWin = 0;
let computerWin = 0;
let playerWeapon = "";
let computerChoice = "";
let humanCounter = document.getElementById('counter-1')
let aiCounter = document.getElementById('counter-2')


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

function increment(counter){
    let number = counter.innerHTML
    number++;
    counter.innerHTML = number
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
            alert("A.I : Human be unique")
        }
        else if (playerWeapon == "rock" && computerChoice == "scissors"){
            alert("Fatality , You win this round");
            playerWin++;
            increment(humanCounter);
        }
        else if (playerWeapon == "scissors" && computerChoice == "paper"){
            alert("On a way to Victory, Human wins this round")
            playerWin++;
            increment(humanCounter);
        }
        else if (playerWeapon == "paper" && computerChoice == "rock"){
            alert("Human Wins")
            playerWin++;
            increment(humanCounter);
        }
        else{
            alert("A,I is taking over humans")
            computerWin++;
            increment(aiCounter);
        }

        if (playerWin >= 5){
            alert("Human wins! , keeping civilization alive");
            let answer = prompt("Would you like to play again?")
            if (answer.toLocaleLowerCase() === "yes" || answer.toLocaleLowerCase() === "y"){
                gameEnd = false
            }
            else{
                gameEnd = true
            }
        }

        if (computerWin >= 5 ){
            alert("Current Objective : Wipe Civilization , initializing")
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

