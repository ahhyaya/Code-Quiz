//declare variables to use via querySelector
//declare a string array to store all quiz questions
//declare a string array to store all answers
var startBtn = document.querySelector(".start");
var initial = document.querySelector("initial");
var submit = localStorage.getItem("submit");


// function visibel() {
//     const div = document.querySelector('div');
//     div.classList.remove('hidden')
// }

// function hidden() {
//     const div = document.querySelector('div');
//     div.classList.add('hidden')
// }

// document.getElementById("visibility").addEventListener("click", function hidden() {
//     const div = document.querySelector('div');
//     div.classList.add('hidden')
// });

// document.getElementById("instruction").className = "visible";
function start(){
document.getElementById("instruction").className = "hidden";
document.getElementById("quiz").className = "visible";
setTime();
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
    timeEl.textContent = "Time: 0";
    document.getElementById("quiz").className = "hidden";
    document.getElementById("allDone").className = "visible";
    if (initial != null) {
        initial.textContent = submit;
    } else {
        initial.textContent = submit;
        localStorage.setItem("submit", submit);
    }
    
}

document.addEventListener("click", checkResult);
function checkResult() {
    // document.getElementById(".result");
    
    // result.textContent = "Correct!"
    var element = event.target;
    if (element.matches(".result")) {
        var category = element.getAttribute("value");
        console.log(category)
        if (category == "correctAnswer") {
            element.setAttribute("result", "Correct!")
        } else {
            element.texContent = "Wrong!"
        }
    }
    }


// use addEventListener to setup click functions for starting the quiz to the start quiz button

//setup a function to store "High scores"
    //when click High score on upper-left jump high score section
    //show high score by decresing order with user initial and scores
    //Go back and Clear high score function

//create a interval timer couting down
var timeEl = document.querySelector(".time");

// var timerEl = document.getElementById("timer");

var secondLeft = 5;


function setTime() {
    var timerInterval = setInterval(function() {
        secondLeft--;
        timeEl.textContent = "Time: " + secondLeft;
        if (secondLeft === 0) {
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


document.addEventListener("click", start);