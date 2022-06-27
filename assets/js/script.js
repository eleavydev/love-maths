// Wait for the DOM to finish loading before running the game
// Get the button elements and event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

     for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
                // alert("You clicked Submit!");             
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked Elaine test${gameType}`);
                runGame(gameType);
            }
        })
     }
     document.getElementById("answer-box").addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            checkAnswer();
        }
     })

     runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed. 
 * Gives a quick reminder of what the function does
 */
function runGame(gameType) {
    
    // document.getElementById("answer-box").value = "";
    // document.getElementById("answer-box").focus();
    
    let compnum = getRandomInt(3);
    console. log(compnum);
    alert(`Random Number isssss: ${compnum}`);

    // let num1 = Math.floor(Math.random() * 25) + 1;
    // let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "rock") {
        checkWinner(0, compnum);
    }else if (gameType === "paper") {
        checkWinner(1, compnum);
    }else if (gameType === "scissors") {
        checkWinner(2, compnum);
    }else if (gameType === "division") {
        checkWinner(playernum, compnum);
    }else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting! `;
    }


function checkWinner (playernum, compnum) {
    alert(`Player Number isssss: ${playernum}. Computer Random Number isssss: ${compnum}`);
    
    // Player and Computer have same choice (0 and 0, 1 and 1, 2 and 2)
    if (playernum === compnum){
        alert(`It's a draw!! Player Number is: ${playernum}. Computer Random Number isssss: ${compnum}`);
    // Rock (0) and Paper (1)
    }else if (playernum === 0 && compnum === 1){
        alert(`Paper covers Rock - Computer wins... Player Number is: ${playernum}. Computer Random Number isssss: ${compnum}`);
        incrementWrongAnswer();
    // Rock (0) and Scissors (2)
    }else if (playernum === 0 && compnum === 2){
        alert(`Rock blunts Scissors - Player wins... Player Number is: ${playernum}. Computer Random Number isssss: ${compnum}`);
        incrementScore();
    // Paper(1) and Rock (0)
    }else if (playernum === 1 && compnum === 0){
        alert(`Paper covers Rock - Player wins... Player Number is: ${playernum}. Computer Random Number isssss: ${compnum}`);
        incrementScore();
    // Paper(1) and Scissors (2)
    }else if (playernum === 1 && compnum === 2){
        alert(`Scissors cut Paper - Computer wins... Player Number is: ${playernum}. Computer Random Number isssss: ${compnum}`);
        incrementWrongAnswer();
    // Scissors(2) and Rock(0)
    }else if (playernum === 2 && compnum === 0){
        alert(`Rock Blunts Scissors - Computer wins... Player Number is: ${playernum}. Computer Random Number isssss: ${compnum}`);
        incrementWrongAnswer();
    // Scissors(2) and Paper (1)
    }else if (playernum === 2 && compnum === 1){
        alert(`Scissors cut Paper - Player wins... Player Number is: ${playernum}. Computer Random Number isssss: ${compnum}`);
        incrementScore();

}

}

}
/**
 * Checks the answer against the first element in 
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :-");
        incrementScore();
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

function getRandomInt(max) {
    return Math. floor(Math. random() * max);
    }

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer. 
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "/") {
        // return [Math.floor(operand1 / operand2), "division"];
        return [operand1 / operand2, "division"];
    }else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++ oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++ oldScore;

}

function displayAdditionQuestion(operand1, operand2) {
    
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    
}

function displaySubtractQuestion(operand1, operand2) {
    
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1: operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2: operand1;
    document.getElementById('operator').textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
    
}

function displayDivisionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1 * operand2 
    document.getElementById('operand2').textContent = operand1
    document.getElementById('operator').textContent = "/";
    
}