//declare variables to use via querySelector
//declare a string array to store all quiz questions
//declare a string array to store all answers
var startBtn = document.querySelector(".start");
// var initial = document.querySelector("initial");
var submitEl = document.querySelector(".submit");
var timeEl = document.querySelector(".time");
var question = document.getElementById("question"); 
const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3");
const choice4 = document.getElementById("4");
const progress = document.getElementById("progress");
var choiceBtn = document.querySelector("#choices");
var result = document.getElementById(".result");
 
var secondLeft = 15;
console.log(timeEl)
 
document.getElementById("instruction").className = "visible";

function start(){
document.getElementById("instruction").className = "hidden";
document.getElementById("quiz").className = "visible";
setTime();
generateQuestion()
}
 
function quizEnd() {
   document.getElementById("quiz").className = "hidden";
   document.getElementById("allDone").className = "visible";
}
function viewScores() {
   document.getElementById("allDone").className = "hidden";
   document.getElementById("highScore").className = "visible";
}
 
 
function allDone() {
   let finalScoreEl = document.querySelector('.finalScore');
 
   finalScoreEl.textContent = finalScoreEl.textContent + " " + secondLeft;
   timeEl.textContent = "Time: 0";
   document.getElementById("quiz").className = "hidden";
   document.getElementById("allDone").className = "visible";
   // if (initial != null) {
   //     initial.textContent = submit;
   // } else {
   //     initial.textContent = submit;
   //     localStorage.setItem("submit", submit);
   // }
  
}
 

   // document.getElementById(".result");
  
   // result.textContent = "Correct!"
//    var element = event.target;
//    if (element.matches(".result")) {
//        var category = element.getAttribute("value");
//        console.log(category)
//        if (category == "correctAnswer") {
//            element.setAttribute("result", "Correct!")
//        } else {
//            element.texContent = "Wrong!"
//        }
//    }
   }
 
 
// use addEventListener to setup click functions for starting the quiz to the start quiz button
 
//setup a function to store "High scores"
   //when click High score on upper-left jump high score section
   //show high score by decresing order with user initial and scores
   //Go back and Clear high score function
 
//create a interval timer couting down
 
 
// var timerEl = document.getElementById("timer");
 
 
 
 
function setTime() {
   var timerInterval = setInterval(function() {
       secondLeft--;
       timeEl.textContent = "Time: " + secondLeft;
       console.log(secondLeft)
       if (secondLeft <= 0) {
           clearInterval(timerInterval);
           allDone();
       }
   },1000);
}
 
 
// setTime();
   //when timer hits 0, end quiz
       //show user "All Done!" on screen
       //show the final score
       //setup an input textarea to let user input intials
       //use addEventListsener to the submit button
       //create a function when submit button call the function to storage initials to local storage
      
//after quiz start
   //random pick a question to display on the screen with 4 answers
       //all the answers have to be setup to a button
           //when click the answer's button
               //compare the correct answer with user choice
                   //if answer is true total score +1
                   //if answer is wrong total time decrese -15
       //setup a function to show if the answer is correct
       var submitAnswer = function() {
           var options = document.getElementsByName('choice');
           var val = "";
           for (var i = 0; i < options.length; i++) {
               if (options[i].clicked) {
                   val = options[i].ariaValueMax;
                   break;
               }
           }
 
           if (val == "answers") {
               result();
           }
       }
   //if user finish the quiz before time counts to 0
       //*show user "All Done!" on screen
       //*show the final score
       //*setup an input textarea to let user input intials
       //*use addEventListsener to the submit button
       //*create a function when submit button call the function to storage initials to local storage
       // * parts are same function as timer hits 0 end quiz
 
//
 
function saveHighscore(event){
   event.preventDefault();
 
   var userInitialEL = document.querySelector('#userintl');
   var userInitial = userInitialEL.value;
   let highscores = JSON.parse(localStorage.getItem('highscores')) || {};
 
   highscores[userInitial]= secondLeft;
 
   localStorage.setItem('highscores', JSON.stringify(highscores));
   window.location.href = 'highscores.html';
};
 
 

 

let questions = [
    {
        question:'Javascript is an _______ language?',
        choice1:'Object-Oriented',
        choice2:'Object-Based',
        choice3:'Procedural',
        choice4:'None of the above',
        correct: '1'
    },
    {
        question:'Which of the following methods can be used to display data in some form using Javascript?',
        choice1:'document.write()',
        choice2:'console.log()',
        choice3:'window.alert',
        choice4:'All of the above',
        correct: '4'
    },
    {
        question: 'How can a datatype be declared to be a constant type?',
        choice1:'const',
        choice2:'var',
        choice3:'let',
        choice4:'constant',
        correct: '1'
    },
    {
        question: 'When an operator’s value is NULL, the typeof returned by the unary operator is:',
        choice1:'Boolean',
        choice2:'Undefined',
        choice3:'Object',
        choice4:'Integer',
        correct: '3'
    },
    {
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        choice1:'stringify()',
        choice2:'parse()',
        choice3:'convert()',
        choice4:'None of the above',
        correct: '1'
    },
    {
        question: 'The 3 basic object attributes in Javascript are:',
        choice1:'Class, prototype, object\'s parameters',
        choice2:'Class, prototype, object\'s extensible flag',
        choice3:'Class, parameters, object\'s extensible flag',
        choice4:'Classes, Native object, and interfaces and Objext\'s extensible flag',
        correct: '2'
    },
    {
        question: 'Which of the following are closures in Javascript?',
        choice1:'Variables',
        choice2:'Functions',
        choice3:'Objects',
        choice4:'All of the above',
        correct: '4'
    },
    {
        question: 'How to stop an interval timer in Javascript?',
        choice1:'clearInterval',
        choice2:'clearTimer',
        choice3:'intervalOver',
        choice4:'None of the above',
        correct: '1'
    },
    {
        question: 'How do we write a comment in javascript?',
        choice1:'/* */',
        choice2:'//',
        choice3:'#',
        choice4:'$ $',
        correct: '2'
    },
    {
        question: 'Which object in Javascript doesn’t have a prototype?',
        choice1:'Base Object',
        choice2:'All objects have a prototype',
        choice3:'None of the objects have a prototype',
        choice4:'None of the above',
        correct: '1'
    }
]


let runningQuestion = 0;

function generateQuestion() {
    
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";

    choice1.innerHTML = q.choice1;

    choice2.innerHTML = q.choice2;

    choice3.innerHTML = q.choice3;

    choice4.innerHTML = q.choice4;

    choiceBtn.addEventListener("click", checkAnswer);
function checkAnswer(answer) {
    for (q = 0, q < question.length; q++) {
    if (answer[q] != questions[runningQuestion].correct) {
        secondLeft -= 10;
        result.innerHTML = "Wrong!"
    } else if (answer[q] === questions[runningQuestion].correct && answer[q] != null) {
        // runningQuestion++;
        result.innerHTML = "Correct!"
        q++;
        generateQuestion();
    }
}
}
}


function renderProgress(){

    for(let qIndex = 0; qIndex <= questions.length - 1; qIndex++){

        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";

    }

}


startBtn.addEventListener("click", start);
submitEl.addEventListener('click', saveHighscore);