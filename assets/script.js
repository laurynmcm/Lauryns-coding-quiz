//variables
//extract timer text, question text and buttons from html
var timer = document.getElementById('timerText');
var question = document.getElementById('questionText');
var startButton = document.getElementById('startButton');
var option1Button = document.getElementById('option1');
var option2Button = document.getElementById('option2');
var option3Button = document.getElementById('option3');
var scoreText = document.getElementById('score');

//create a series of questions
var question1 = "What does a variable do?";
var question2 = "What does a Function do?";
var question3 = "What does 'element.textContent =' do?";
var question4 = "What does 'element.addEventlistener('click', )' do?";
var question5 = "What does an if statement do?";
var question6 = "What does 'function(); do?";

//variables to track questions
var questionsLeft = 6;
var score = 0;

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
      }
    }, 2000);
  }


//start button function
startButton.addEventListener('click', function(){
    countdown();
    //add answers to buttons 
    question.textContent = question1;
    option1Button.textContent = "Hold a value";
    option2Button.textContent = "Define a function";
    option3Button.textContent = "add an element";
    
//question 1
      //add event listeners to buttons
      option1Button.addEventListener('click', function(){
        question.textContent = question2;
        score ++;
        scoreText.textContent = "Score: " + score;
        questionsLeft --;

        option1Button.textContent = "Changes the text of an element";
        option2Button.textContent = "Calls a function";
        option3Button.textContent = "Define a function";
      });
  
      option2Button.addEventListener('click', function(){
        question.textContent = question2;
        score --;
        scoreText.textContent = "Score: " + score;
        questionsLeft --;

        option1Button.textContent = "change the text of an element";
        option2Button.textContent = "Calls a function";
        option3Button.textContent = "Define a function";
      });
  
      option3Button.addEventListener('click', function(){
        question.textContent = question2;
        score --;
        scoreText.textContent = "Score: " + score;
        questionsLeft --;

        option1Button.textContent = "change the text of an element";
        option2Button.textContent = "Calls a function";
        option3Button.textContent = "Define a function";
      });
    
//Question 2
     //add event listeners to buttons
     option1Button.addEventListener('click', function(){
      question.textContent = question3;
      score --;
      scoreText.textContent = "Score: " + score;
      questionsLeft --;

      option1Button.textContent = "Tells Prgram to list for Event";
      option2Button.textContent = "Changes the text of an element";
      option3Button.textContent = "Holds a Value";
    });

    option2Button.addEventListener('click', function(){
      question.textContent = question3;
      score --;
      scoreText.textContent = "Score: " + score;
      questionsLeft --;

      option1Button.textContent = "Tells Prgram to list for Event";
      option2Button.textContent = "Changes the text of an element";
      option3Button.textContent = "Holds a Value";
    });

    option3Button.addEventListener('click', function(){
      question.textContent = question3;
      score ++;
      scoreText.textContent = "Score: " + score;
      questionsLeft --;

      option1Button.textContent = "Tells Prgram to list for Event";
      option2Button.textContent = "Changes the text of an element";
      option3Button.textContent = "Holds a Value";
    });

//Question 3


//Question 4


//Question 5


//Question 6
    

      
    


});



