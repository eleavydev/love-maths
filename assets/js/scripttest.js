/**
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"]



// Wait for the DOM to finish loading before running the game
// Get the button elements and event listeners to them

     for (let button of buttons){
        button.addEventListener("click", function() {
                let playerChoice = this.getAttribute("data-choice");
                alert(`You clicked ${playerChoice}`);
                playGame(playerChoice);
            }
        )}
    
    //  runGame("addition");


/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed. 
 * Gives a quick reminder of what the function does
 */
function playGame(playerChoice) {
    
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();
    
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    }else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    }else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    }else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    }else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting! `;
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