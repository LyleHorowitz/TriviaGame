var correctAnswer
var answer
var questions = [{
question:  "What is the only song to go #1 on the Billboard Top 100 In 2010 out of your options below?",
answer: ["None", "Kanye West - Power", "Big Boi - Shutterbug", "Lil' Wayne - She Will", "Eminem - Not Afraid", "Young Money - Bedrock"],
correctAnswer: "None"
// insert jpeg
}, {
question: "What is the only song to go #1 on the Billboard Top 100 In 2011 out of your options below?",
answer: ["Nicki Minaj - Super Bass", "Lil' Wayne - She Will", "Dr. Dre - I Need A Doctor", "Bad Meets Evil - Lighters", "Wiz Khalifa - Black & Yellow"],
correctAnswer: "Wiz Khalifa - Black & Yellow"
// insert jpeg
}, {
question: "What is the only song to go #1 on the Billboard Top 100 In 2012 out of your options below?",
answer: ["Flo-Rida - Whistle", "Psy - Gangnam Style", "Flo-Rida - Good Feeling", "Nicki Minaj - Turn Me On", "Kanye West & Jay-Z - Otis"],
correctAnswer: "Flo-Rida - Whistle"
// insert jpeg
}, {
question: "What is the only song to go #1 on the Billboard Top 100 In 2013 out of your options below?",
answer: ["Macklemore & Ryan Lewis - Thrift Shop", "Eminem - Berzerk", "Jay-Z - Holy Grail", "Drake - Started From The Bottom", "Kanye West - Bound 2"],
correctAnswer: "Macklemore & Ryan Lewis - Thrift Shop"
// insert jpeg
}, {
question: "What is the only song to go #1 on the Billboard Top 100 In 2014 out of your options below?", 
answer: ["Nicki Minaj - Anaconda", "DJ Snake - Turn Down For What", "Iggy Azalea - Fancy", "Rich Gang - Lifestyle", "Pitbull - Wild Wild Love"],
correctAnswer: "Iggy Azalea - Fancy"
// insert jpeg
}, {
question: "What is the only song to go #1 on the Billboard Top 100 In 2015 out of your options below?", 
answer: ["Drake - Hotline Bling", "Wiz Khalifa - See You Again", "Fetty Wap - Trap Queen", "Silento - Watch Me", "T-Wayne - Nasty Freestyle"],
correctAnswer: "Wiz Khalifa - See You Again"
// insert jpeg
}, {
question: "What is the only song to go #1 on the Billboard Top 100 In 2016 out of your options below?", 
answer: ["Flo-Rida - My House", "Desiigner - Panda", "Drake - Summer Sixteen","J. Cole - De Ja Vu", "Kent Jones - Don't Mind"],
correctAnswer: "Desiigner - Panda"
// insert jpeg
}, {
question: "What is the only song to go #1 on the Billboard Top 100 In 2017 out of your options below?",
answer: ["Future - Mask Off", "Migos - Bad & Boujee", "Kendrick Lamar - DNA", "Big Sean - Bounce Back", "Machine Gun Kelly - Bad Things"],
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
alert("Your score is "+getScore()+"/10");
}



