//declare variables to use via querySelector
//declare a string array to store all quiz questions
//declare a string array to store all answers


function result() {
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

function allDone() {
    timeEl.textContent = " ";

}

setTime();

// use addEventListener to setup click functions for starting the quiz to the start quiz button

//setup a function to store "High scores"
    //when click High score on upper-left jump high score section
    //show high score by decresing order with user initial and scores
    //Go back and Clear high score function

//create a interval timer couting down
var timeEl = document.querySelector(".time");

var timerEl = document.getElementById("timer");

var secondLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        secondLeft--;
        timeEl.textContent = "Time: " + secondLeft;

        if (secondLeft === 0) {
            allDone();
        } else {
            submitAnswer();
        }
    },1000);
}
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


