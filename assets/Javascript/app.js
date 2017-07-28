function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
            secs--;
            setTimeout('Decrement()', 1000);
};

var correctAnswer
var answer
var questions = [{
question:  "01. What is the only song to go #1 on the Billboard Top 100 In 2010 out of your options below?",
answer: ["<button>None</button>", 
"<button>Kanye West - Power</button>", 
"<button>Big Boi - Shutterbug</button>", 
"<button>Lil' Wayne - She Will</button>", 
"<button>Eminem - Not Afraid</button>", 
"<button>Young Money - Bedrock</button>"],
correctAnswer: "None"
// insert jpeg
}, {
question: "02. What is the only song to go #1 on the Billboard Top 100 In 2011 out of your options below?",
answer: ["<button>Nicki Minaj - Super Bass</button>", 
"<button>Lil' Wayne - She Will</button>", 
"<button>Dr. Dre - I Need A Doctor</button>", 
"<button>Bad Meets Evil - Lighters</button>", 
"<button>Wiz Khalifa - Black & Yellow</button>"],
correctAnswer: "Wiz Khalifa - Black & Yellow"
// insert jpeg
}, {
question: "03. What is the only song to go #1 on the Billboard Top 100 In 2012 out of your options below?",
answer: ["<button>Flo-Rida - Whistle</button>", 
"<button>Psy - Gangnam Style</button>", 
"<button>Flo-Rida - Good Feeling</button>", 
"<button>Nicki Minaj - Turn Me On</button>", 
"<button>Kanye West & Jay-Z - Otis</button>"],
correctAnswer: "Flo-Rida - Whistle"
// insert jpeg
}, {
question: "04. What is the only song to go #1 on the Billboard Top 100 In 2013 out of your options below?",
answer: ["<button>Macklemore & Ryan Lewis - Thrift Shop</button>", 
"<button>Eminem - Berzerk</button>", 
"<button>Jay-Z - Holy Grail</button>", 
"<button>Drake - Started From The Bottom</button>", 
"<button>Kanye West - Bound 2</button>"],
correctAnswer: "Macklemore & Ryan Lewis - Thrift Shop"
// insert jpeg
}, {
question: "05. What is the only song to go #1 on the Billboard Top 100 In 2014 out of your options below?", 
answer: ["<button>Nicki Minaj - Anaconda</button>", 
"<button>DJ Snake - Turn Down For What</button>", 
"<button>Iggy Azalea - Fancy</button>", 
"<button>Rich Gang - Lifestyle</button>", 
"<button>Pitbull - Wild Wild Love</button>"],
correctAnswer: "Iggy Azalea - Fancy"
// insert jpeg
}, {
question: "06. What is the only song to go #1 on the Billboard Top 100 In 2015 out of your options below?", 
answer: ["<button>Drake - Hotline Bling</button>", 
"<button>Wiz Khalifa - See You Again</button>", 
"<button>Fetty Wap - Trap Queen</button>", 
"<button>Silento - Watch Me</button>", 
"<button>T-Wayne - Nasty Freestyle</button>"],
correctAnswer: "Wiz Khalifa - See You Again"
// insert jpeg
}, {
question: "07. What is the only song to go #1 on the Billboard Top 100 In 2016 out of your options below?", 
answer: ["<button>Flo-Rida - My House</button>", 
"<button>Desiigner - Panda</button>", 
"<button>Drake - Summer Sixteen</button>",
"<button>J. Cole - De Ja Vu</button>", 
"<button>Kent Jones - Don't Mind</button>"],
correctAnswer: "Desiigner - Panda"
// insert jpeg
}, {
question: "08. What is the only song to go #1 on the Billboard Top 100 In 2017 out of your options below?",
answer: ["<button>Future - Mask Off</button>", 
"<button>Migos - Bad & Boujee</button>", 
"<button>Kendrick Lamar - DNA</button>", 
"<button>Big Sean - Bounce Back</button>", 
"<button>Machine Gun Kelly - Bad Things</button"],
correctAnswer: "Migos - Bad & Boujee"
// insert jpeg
}]
//
function getScore(){
var score=0;
var numQuestions=8;

for (var i=0;i<numQuestions;i++){
if (userInput[i]==answer[i]){
score += 1;
}
else{
score += 0;
}

}
return score;
}
function returnScore(){
alert("Your score is "+getScore()+"/08");
}
//
for (var i = 0; i < questions.length; i++) {
$('#test').append('<div>' + questions[i].question + '<br>' + questions[i].answer[0] + questions[i].answer[1] +
questions[i].answer[2] + questions[i].answer[3] + questions[i].answer[4] + '<div><br>')
console.log(questions[i].answer)
console.log(questions[i].correctAnswer)

}
var delayButtonAlert;
var windowTimeout = setTimeout(function(){
alert("Welcome to Billboard Trivia!");
}, 1000);
$("#cancel").on("click", function() {
clearTimeout(delayButtonAlert);
});
$("#window-cancel").on("click", function() {
clearTimeout(windowTimeout);
});

function checkAnswer(myval) {
    if (myval == 0) {
        alert ("Wrong answer!");
    } else {
        alert ("Correct Answer!");
    }
}

  
///// Psuedo coding my final steps


 // Call to the scoreboard so the buttons reflect the correct and incorrect answers

// Get time counter to stop at 00:00 and not loop back to 5:00 and game to end

// Don't let the player pick more than one answer per question.

