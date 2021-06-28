

// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName //
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
const input = require('readline-sync');
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = []
// let question = '';
let candidateName = '';


let questions = ["1. Who was the first American woman in space? ",
 "2. True or false: 5 kilometer == 5000 meters? ",
 "3. (5 + 3)/2 * 10 = ? ",
 "4. Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
 "5. What is the minimum crew size for the ISS? "
 ];
let correctAnswers = ["Sally Ride",
 "true",
  "40",
  "Trajectory",
  "3"
   ];
let candidateAnswers = [];
let countCorrect = Number();
let grade = Number();


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
let candidateName = input.question("Candidate Name:");
console.log("Welcome Candidate: " + candidateName)
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (let i = 0; i < questions.length; i++) {
    let candidateAnswer = input.question(questions[i])
    candidateAnswers.push(candidateAnswer)
    console.log(`Candidate Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
    if (candidateAnswers[i].toUpperCase() == correctAnswers[i].toUpperCase()) {
      countCorrect = countCorrect + 1;
    } else {
      
    }
}
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  let grade = countCorrect *20
  let status = '';
    if (grade >= 80) {
      status = 'Passed'
  } else {
    status = 'Failed'
  }

  console.log(`>>> Overall Grade: ${grade} % (${countCorrect} of 5 responses correct) <<< \n>>> Status: ${status}<<<`);
  

}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //




  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};