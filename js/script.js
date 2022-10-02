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
//    }
 
 
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
        choices:['Object-Oriented',
        'Object-Based',
        'Procedural',
        'None of the above'],
        correct: 'Object-Oriented'
    },
    {
        question:'Which of the following methods can be used to display data in some form using Javascript?',
        choices:['document.write()',
        'console.log()',
        'window.alert',
        'All of the above'],
        correct: 'All of the above'
    },
    {
        question: 'How can a datatype be declared to be a constant type?',
        choices:['const',
        'var',
        'let',
        'constant'],
        correct: 'const'
    },
    {
        question: 'When an operator’s value is NULL, the typeof returned by the unary operator is:',
        choices:['Boolean',
        'Undefined',
        'Object',
        'Integer'],
        correct: 'Object'
    },
    {
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        choices:['stringify()',
        'parse()',
        'convert()',
        'None of the above'],
        correct: 'stringify()'
    },
    {
        question: 'The 3 basic object attributes in Javascript are:',
        choices:['Class, prototype, object\'s parameters',
        'Class, prototype, object\'s extensible flag',
        'Class, parameters, object\'s extensible flag',
        'Classes, Native object, and interfaces and Objext\'s extensible flag'],
        correct: 'Class, prototype, object\'s extensible flag'
    },
    {
        question: 'Which of the following are closures in Javascript?',
        choices:[']Variables',
        'Functions',
        'Objects',
        'All of the above'],
        correct: 'All of the above'
    },
    {
        question: 'How to stop an interval timer in Javascript?',
        choices:['clearInterval',
        'clearTimer',
        'intervalOver',
        'None of the above'],
        correct: 'clearInterval'
    },
    {
        question: 'How do we write a comment in javascript?',
        choices:['/* */',
        '//',
        '#',
        '$ $'],
        correct: '//'
    },
    {
        question: 'Which object in Javascript doesn’t have a prototype?',
        choices:['Base Object',
        'All objects have a prototype',
        'None of the objects have a prototype',
        'None of the above'],
        correct: 'Base Object'
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

    // choiceBtn.addEventListener("click", checkAnswer);

    function checkAnswer(event) {
        choiceBtn = event.target;
        if (choiceBtn.value != questions[runningQuestion].correct) {
            secondLeft -= 10;
            result.innerHTML = "Wrong!"
        } else {
            // runningQuestion++;
            q++;
            result.innerHTML = "Correct!"
            generateQuestion();
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
choiceBtn.onclick = checkAnswer;