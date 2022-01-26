// HOW-WELL-DO-YOU-KNOW-ME QUIZ CLI APP

var readLineSync = require('readline-sync');

//Greeting User
function welcomeUser(){
  var userName = readLineSync.question('Please enter your name : ');
  console.log(`\nHi! ${userName}.Welcome to \"HOW-WELL-DO-YOU-KNOW-SOBIT?\" Quiz.So let\'s play the game.\n`);
}

var score = 0;

// players who have high scores
var highScores = [
  {
    name : 'Abhishek',
    score : 4
  },
  {
    name : 'Rohit',
    score : 3
  }
]

//Quiz-Questions
var questions = [{
  question : 'Where do I live? ',
  answer : 'Guwahati'
},
{
  question : 'Which is my favorite book? ',
  answer : 'Stop Worrying Start Living'
},
{
  question : 'Which is my favorite movie? ',
  answer : 'Life is Beautiful'
},
{
  question : 'Which is my favorite anime series? ',
  answer : 'Demon Slayer'
},
{
  question : 'What I want to become? ',
  answer : 'Software Engineer'
}];


function playQuiz(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log('You are right!');
    score++;
  }else{
    console.log('You are wrong!\nCorrect Answer: ',answer);
  }
  console.log('Current Score: ', score);
  console.log('---------------------------------');
}

//Function to loop through all the questions and answers
function askQuestion(){
  for(var i = 0; i < questions.length; i++){
    var currentQuestion = questions[i];
    playQuiz(currentQuestion.question, currentQuestion.answer);
  }
}


// Output based on user score
function userScore(){
  if(score < 1){
    console.log('Your final score is ' + score + '. Don\'t worry if you don\'t know me.Let\'s have a coffee someday!');
  }else{
    console.log('Hurrah!! You have scored : ',score,'. You know me pretty well');
  }
  console.log('---------------------------------');
  console.log('\nBelow are the high scorers of this QUIZ. If you have scored more than them send me a screenshot, I will update it  here');
  console.log('---------------------------------');
  highScores.map(highscore => console.log(`${highscore.name} : ${highscore.score}`));
}


welcomeUser();
askQuestion();
userScore();