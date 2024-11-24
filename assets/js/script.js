// Run game

document.addEventListener ("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})


function runGame() {

}
// Check answer
function checkAnswer() {

}
// Calculate answer
function calculateCorrectAnswer() {

}
// Increment score
function incrementScore() {

}
// Increment wrong answer
function incrementWrongAnswer() {

}
// Display Addition question
function displayAdditionQuestion() {

}
// Display Subtract question
function displaySubtractQuestion() {

}
// Display Multiply question
function displayMultiplyQuestion() {

}
    // Display Divide question
function displayDivideQuestion() {

}
