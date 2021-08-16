var readlinesync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Muninder",
    score: 10,
  },

  {
    name: "Manu",
    score: 9,
  },
]

var userName = readlinesync.question("Please add your name: ");

console.log("Welcome " + userName + ", to 'Are you a Harry Potter Fan'! ");

function play(question, answer) {
  var userAnswer = readlinesync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {

    console.log("You are right!");
    score = score + 1;

   } else {

     console.log ("Oops! you are wrong");
   }

}

var questions = [{
  question: "What was Harry's parents name?? ",
  answer: "James and Lilly Potter"
}, {
  question: "Which professor teaches Transfiguration?? ",
  answer: "McGonagall" 
}, {
  question: "Who first shows Harry the diary of Tom Riddle? ",
  answer: "Moaning Myrtle" 
},{
  question: "Who was Tom Marvolo Riddle? ",
  answer: "Voldemort" 
},{
  question: "Who kills Dumbledore at the end of 'The Half-Blood Prince'? ",
  answer: "Snape" 
},{
  question: "In the epilogue to 'Harry Potter and the Deathly Hallows,'' to whom is Harry married? ",
  answer: "Ginny Weasley " 
},{
question: "The first Harry Potter theme park opened in 2010. Where is it? ",
  answer: "Orlando, Florida"
}, {
question: "Harry hasn't had the best experiences with his Defense Against the Dark Arts teachers, but in his third year, he finally gets one who really knows his stuff. Who is he? ",
  answer: "Professor Lupin"
}, {
  question: "In the fourth book, Harry received much unwanted attention from which Daily Prophet reporter?",
  answer: "Rita Skeeter"
} , {
  question: "Which horse-like creatures pull the school carriages at Hogwarts?",
  answer: "Thestrals"
}];

for (var i=0; i<questions.length; i++){
var currentQuestion = questions[i];
play(currentQuestion.question,currentQuestion.answer)

}

function showScores() {
  console.log("Congrats! You SCORED: ", score);

  console.log("If you scored a new High Score then ping me,Current High score is: ");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

showScores();