//variables for answer buttons points
var buttonOnePoints;
var buttonTwoPoints;
var buttonThreePoints;

var score = 0;


//grab buttons from document
var startButton = document.querySelector('#startButton');
var answerOne = document.querySelector("#answerOne");
var answerTwo = document.querySelector("#answerTwo");
var answerThree = document.querySelector("#answerThree");


//grab text from document
var questionText = document.querySelector("#questionText");
var scoreText = document.querySelector("#scoreText");
var timer = document.querySelector("#timerText");


//variable to hold questions
var questions = [
    "What is JQuery?",
    "How to you change the text of an Element?",
    "how to you access the text of an Element?",
    "What is a variable?",
    "What is moment.js?",
    "How do you add text to end of element string?"
];


//variable to hold right answers
var answers = [
    "A simplified JS library",
    "element.textContent =",
    "element.innerhtml",
    "A container to hold a value",
    "A time based JS library",
    "element.append();"
];

//timer variable
var timeLeft = 30;

//Create a timer. When timer ends game is over.
function countdown() {

    var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
        timer.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } 
    else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timer.textContent = timeLeft + ' second remaining';
      timeLeft--;
    }
      else {
        timer.textContent = 'Time Out!';
        clearInterval(timeInterval);
        playerData = window.prompt("Please Enter Initials for scoreboard: ") + " " + score.toString();
        window.alert("Game Over. Current Score: " + score + " Click to play again.")
        localStorage.setItem("playerData", playerData);
        location.reload();
      }
    }, 1000);
  }

//fill in score board
for (var i = 0; i < localStorage.length; i++){
var tag = document.createElement("li");
var text = document.createTextNode(localStorage.getItem(localStorage.key(i)));
tag.appendChild(text);
var element = document.querySelector("#scoreBoard")
element.appendChild(tag);

}


//variable to hold count
var count = 0;

//variable for correct answer
var answer;


//fucntion to display answers and tell which button is correct
function displayAnswers(){
    if (count == 0){
        answerOne.textContent = answers[2];
        answerTwo.textContent = answers[5];
        answerThree.textContent = answers[0];

        answer = 1;
    }

    else if (count == 1){
        answerOne.textContent = answers[3];
        answerTwo.textContent = answers[1];
        answerThree.textContent = answers[4];

        answer = 3;
    }

    else if (count == 2){
        answerOne.textContent = answers[2];
        answerTwo.textContent = answers[0];
        answerThree.textContent = answers[5];

        answer = 2;
    }

    else if (count == 3){
        answerOne.textContent = answers[0];
        answerTwo.textContent = answers[3];
        answerThree.textContent = answers[4];

        answer = 1;
    }

    else if (count == 4){
        answerOne.textContent = answers[4];
        answerTwo.textContent = answers[1];
        answerThree.textContent = answers[5];

        answer = 2;
    }

    else if (count == 5){
        answerOne.textContent = answers[5];
        answerTwo.textContent = answers[1];
        answerThree.textContent = answers[0];

        answer = 1;
    }
}

//function for answer buttons
function answerButtons(button, buttonId) {
    button.addEventListener("click", function(event) {
    console.log(count);
    if (count <= 5){
        questionText.textContent = questions[count];
        displayAnswers();
    }

    else if (count == 6){
        playerData = window.prompt("Please Enter Initials for scoreboard: ") + " " + score.toString();
        window.alert("Game Over. Current Score: " + score + " Click to play again.")
        localStorage.setItem(playerData, playerData);
        location.reload();
        
    }
    
    count++;

    if (buttonId == answer){
        score ++;
    }

    else if(buttonId != answer){
        score --;
        timeLeft = timeLeft - 5;
    }

    scoreText.textContent = score;
    
    })
}

//print score
scoreText.append(score);

//function for start button
startButton.addEventListener('click', function(){
    countdown();
    questionText.textContent = questions[0];
    displayAnswers();
    count ++;
    console.log(count);
})

//call fucntions for answer buttons
answerButtons(answerOne, 1);
answerButtons(answerTwo, 2);
answerButtons(answerThree, 3);






