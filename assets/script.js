//variables
var playerData;
var highScore;
//extract timer text, question text and buttons from html
var timer = document.getElementById('timerText');
var question = document.getElementById('questionText');
var startButton = document.getElementById('startButton');
var option1Button = document.getElementById('option1');
var option2Button = document.getElementById('option2');
var option3Button = document.getElementById('option3');
var scoreText = document.getElementById('score');

//create a series of questions
var questions = [
  "What does a variable do?",
  "What does 'function fucntionName(){}' do",
  "What does 'element.textContent =' do?",
  "What does 'element.addEventlistener('click', )' do?",
  "What does an if statement do?",
  "What does 'function(); do?"
]

//variables to track questions
var score = 1;
var questionsLeft = 0;

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
        option1Button.textContent = "";
        option2Button.textContent = "";
        option3Button.textContent = "";
        clearInterval(timeInterval);

        if (score > highScore){
          highScore = score;
        }
          playerData = window.prompt("Please Enter Initials for scoreboard: ") + score;
        window.alert("Game Over. Current Score: " + score + " Click to play again.")
        location.reload();
      }
    }, 2000);
  }

//fucntion to check answers

  
  


  
//question 1
  function questionButtons(){
  console.log(score);

    question.textContent = questions[0];

  option1Button.textContent = "Hold a value"
  option2Button.textContent = "Define a function"
  option3Button.textContent = "Create a text element"

  option1Button.addEventListener("click", function(){
    score ++;
    question2();
    scoreText.textContent = "Score: " + score;
  });
    
  option2Button.addEventListener("click", function(){
    score --;
    question2();
    scoreText.textContent = "Score: " + score;
  });
  option3Button.addEventListener("click", function(){
    score --;
    question2();
    scoreText.textContent = "Score: " + score;
  });
  }

//question 2
function question2(){
  console.log(score);
  
  question.textContent = questions[1];

  option1Button.textContent = "Repeat code"
  option2Button.textContent = "Change the text of an element"
  option3Button.textContent = "Call a fucntion"

  option1Button.addEventListener("click", function(){
    score --;
    question3();
    scoreText.textContent = "Score: " + score;
  });
  option2Button.addEventListener("click", function(){
    score --;
    question3();
    scoreText.textContent = "Score: " + score;
  });
  option3Button.addEventListener("click", function(){
    score ++;
    question3();
    scoreText.textContent = "Score: " + score;
  });

}
  
//question 3

function question3(){
  console.log(score);
  question.textContent = questions[2];

  option1Button.textContent = "Change text of an element"
  option2Button.textContent = "Define a Element"
  option3Button.textContent = "Define a Fucntion"

  option1Button.addEventListener("click", function(){
    score ++;
    question4();
    scoreText.textContent = "Score: " + score;
  });
  option2Button.addEventListener("click", function(){
    score --;
    question4();
    scoreText.textContent = "Score: " + score;
  });
  option3Button.addEventListener("click", function(){
    score --;
    question4();
    scoreText.textContent = "Score: " + score;
  });
}


//question 4
function question4(){
  console.log(score);

  question.textContent = questions[3];

  option1Button.textContent = "Tells Buttons to listen for click"
  option2Button.textContent = "Defines a function"
  option3Button.textContent = "Holds a Value"

  option1Button.addEventListener("click", function(){
    score ++;
    question5();
    scoreText.textContent = "Score: " + score;
  });
  option2Button.addEventListener("click", function(){
  score --;
    question5();
    scoreText.textContent = "Score: " + score;
  });
  option3Button.addEventListener("click", function(){
  score --;
    question5();
    scoreText.textContent = "Score: " + score;
  });
}



//question 5
function question5(){
  console.log(score);

  question.textContent = questions[4];

  option1Button.textContent = "Creates and element"
  option2Button.textContent = "Runs code according to conditonal statement"
  option3Button.textContent = "Loops Code"

  option1Button.addEventListener("click", function(){
    score --;
    question6();
    scoreText.textContent = "Score: " + score;
  });
  option2Button.addEventListener("click", function(){
    score ++;
    question6();
    scoreText.textContent = "Score: " + score;
  });
  option3Button.addEventListener("click", function(){
    score --;
    question6();
    scoreText.textContent = "Score: " + score;
  });
}


//question 6
function question6(){
  console.log(score);

  question.textContent = questions[5];

  option1Button.textContent = "Define a fucntion"
  option2Button.textContent = "Calls a variable"
  option3Button.textContent = "Call a function"

  option1Button.addEventListener("click", function(){
    score --;
    endGame();
  });
  option2Button.addEventListener("click", function(){
    score --;
    endGame();
  });
  option3Button.addEventListener("click", function(){
    score ++;
    endGame();
  });
}


//no questions left
function endGame(){
  if (score > highScore){
    highScore = score;
  }
    playerData = window.prompt("Please Enter Initials for scoreboard: ") + score;
    window.alert("Game Over. Current Score: " + score + " Click to play again.")
    location.reload();
}




//fucntions for start button that calls button fucntions and countdown
startButton.addEventListener("click", function(){
  countdown();
  scoreText.textContent = "Score = " + score;
  
  questionButtons();
  
  
});



 

