
const game = () => {



    let value = 0 ;
    let playerWin = 0;
    let computerWin = 0;
    let humanCounter = document.getElementById('counter-1');
    let aiCounter = document.getElementById('counter-2');
    let buttonRock = document.querySelector('.rock');
    let buttonPaper = document.querySelector('.paper');
    let buttonScissors = document.querySelector('.scissors')
    let gameEnd = false
    let computer = ""



    function randomNumber() { 

        value =  Math.floor(Math.random() * (4 - 1) + 1 );
    }

   




    function computerPlay(){


        
        randomNumber()


        switch(value){

            case 1:
                computer =  "rock"
                break;
            case 2:
                computer = "paper"
                break;
            case 3:
                computer = "scissors"
                break;
        }

}

    function increment(counter){
        let number = counter.innerHTML
        number++;
        counter.innerHTML = number
    }



    function gameOver(){
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
    

    

    function playerChoice(){

        
        buttonRock.addEventListener('click',() => {
          gameOver();
          computerPlay();
            if (computer == "scissors"){
                playerWin++;
                increment(humanCounter);
            }
            else if(computer == "rock"){
                alert("Human be unique")
            }
            else{
                alert("A.I is taking over humans")
                computerWin++;
                increment(aiCounter);
            }
        })

        buttonPaper.addEventListener('click',() => {
          gameOver();
          computerPlay();
            if (computer == "rock"){
                playerWin++;
                increment(humanCounter);
            }
            else if(computer == "paper"){
                alert("human be unique")
            }
            else{
                alert("A.I is taking over humans")
                computerWin++;
                increment(aiCounter);
            }
        })

        buttonScissors.addEventListener('click',() => {
          gameOver();
          computerPlay();
            if (computer == "rock"){
                playerWin++;
                increment(humanCounter);
            }
            else if(computer == "scissors"){
                alert("Human be unique")
            }
            else{
                alert("A.I is taking over humans")
                computerWin++;
                increment(aiCounter);
            }
        })
    }

    playerChoice();

 

}


game();
