/**
 * Declare constants for DOM elements
 * and possible choices (Rock, Paper, Scissors)
 */
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")
const choices = ["rock", "paper", "scissors"]

const clapSound = new Audio("assets/audio/clap.mp3");
const looseSound = new Audio('assets/sounds/loose.mp3');

/**
 * Once the DOM has finished loading, loop through all of the buttons and Add event listener. 
 */
 document.addEventListener("DOMContentLoaded", function() {
    
     for (let button of buttons) {
        button.addEventListener("click", function() {
                let playerChoice = this.getAttribute("data-choice");
                alert(`You clicked Elaine test playerChoice is${playerChoice}`);
                runGame(playerChoice);
            });
        }      

    })

/**
 * The main game function called when the user has selected a button. 
 * This function accepts one parameter, which is the data-choice value of selected button 
 * (which will be 0, 1 or 2 repesesenting Rock, Paper or Scissors)
  */
function runGame(playerChoice) {
    
    // Call getRandomInt function to get Computer choice 
    let machineChoice = getRandomInt(3);
    console.log(machineChoice);
    alert(`Random Number isssss: ${machineChoice}`);

   
    if ( playerChoice == 0 || playerChoice == 1 || playerChoice == 2 )  {
        alert(`Entering into loop with player choice : ${playerChoice}. and computer choice  ${machineChoice}.`);
        checkWinner(choices[playerChoice], choices[machineChoice]);
    }
    else {
       throw `Unknown player Choice: ${playerChoice}. Aborting! `;
    }



function checkWinner (playerChoice,machineChoice) {
    alert(`In Check winner loop, Player Number isssss: ${playerChoice}. Computer Random Number isssss: ${machineChoice}`);
    console.log(playerChoice);
    console.log(machineChoice);

    // Player and Computer have same choice (0 and 0, 1 and 1, 2 and 2)
    if (playerChoice === machineChoice){
        alert(`It's a draw!! Player Number is: ${playerChoice}. Computer Random Number isssss: ${machineChoice}`);
    // Rock (0) and Paper (1)
    }else if (playerChoice === "rock" && machineChoice === "paper"){
        alert(`Paper covers Rock - Computer wins... Player Number is: ${playerChoice}. Computer Random Number isssss: ${machineChoice}`);
        incrementMachineScore();
    // Rock (0) and Scissors (2)
    }else if (playerChoice === "rock" && machineChoice === "scissors"){
        alert(`Rock blunts Scissors - Player wins... Player Number is: ${playerChoice}. Computer Random Number isssss: ${machineChoice}`);
        incrementPlayerScore();
        clapSound.play();
    // Paper(1) and Rock (0)
    }else if (playerChoice === "paper" && machineChoice === "rock"){
        alert(`Paper covers Rock - Player wins... Player Number is: ${playerChoice}. Computer Random Number isssss: ${machineChoice}`);
        incrementPlayerScore();
        clapSound.play();
    // Paper(1) and Scissors (2)
    }else if (playerChoice === "paper" && machineChoice === "scissors"){
        alert(`Scissors cut Paper - Computer wins... Player Number is: ${playerChoice}. Computer Random Number isssss: ${machineChoice}`);
        incrementMachineScore();
    // Scissors(2) and Rock(0)
    }else if (playerChoice === "scissors" && machineChoice === "rock"){
        alert(`Rock Blunts Scissors - Computer wins... Player Number is: ${playerChoice}. Computer Random Number isssss: ${machineChoice}`);
        incrementMachineScore();
    // Scissors(2) and Paper (1)
    }else if (playerChoice === "scissors" && machineChoice === "paper"){
        alert(`Scissors cut Paper - Player wins... Player Number is: ${playerChoice}. Computer Random Number isssss: ${machineChoice}`);
        incrementPlayerScore();
        clapSound.play();
    }

}

}

function getRandomInt(max) {
    return Math. floor(Math. random() * max);
    }


/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementPlayerScore() {
    
    alert("In Incremembt Player score loop");
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    alert(oldScore);
    document.getElementById("player-score").innerText = ++ oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementMachineScore() {
    
    alert("In Incremembt Machine score loop");
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    
    alert(oldScore);
    document.getElementById("computer-score").innerText = ++ oldScore;


}


