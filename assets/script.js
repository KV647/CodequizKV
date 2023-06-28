var startButton = document.querySelector("#startbutton")

var wholequestionEl = document.querySelector(".wholequestion")
var questionEl = document.querySelector("#question-itself")
var answerbtnEl = document.querySelector("#answers")

// let shuffledQuestions, currentQuestionIndex
startButton.addEventListener("click", start)

let currentQuestion = 0;


function start() {
    startButton.classList.add('hidden')
    wholequestionEl.classList.remove('hidden')
    nextQuestion()
}

function nextQuestion() {
    const quizQuestion = questions[currentQuestion];
    questionEl.textContent = quizQuestion.question;
    answerbtnEl.innerHTML = "";

    const container = document.getElementById('answers');

    questions.forEach(element => {
        const button = document.createElement('button');

        button.textContent = element;
        button.addEventListener('click', () => {
        console.log(`Clicked ${element}`);
    });
    container.appendChild(button);
});
}






function checkAnswer(event) {
    const selectedChoice = event.target.textContent;
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedChoice === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        nextQuestion();
    } else {
        console.log("no");
    }
}

const questions = [
    {
        question: 'Commonly used data types DO Not include:',
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
]





// the questions
// const questions = [
//     {
//         question: 'Commonly used data types DO Not include:',
//         answers: [
//             { text: 'strings', correct: false },
//             { text: 'booleans', correct: false },
//             { text: 'alerts', correct: false },
//             { text: 'numbers', correct: false }
//         ]
//     },
//     {
//         question: 'The condition in an if/else statement is enclosed with _____.',
//         answers: [
//             { text: 'quotes', correct: false },
//             { text: 'curly brakets', correct: false },
//             { text: 'parenthesis', correct: false },
//             { text: 'square brackets', correct: false }
//         ]
//     },
//     {
//         question: 'Arrays in JavaScript can be used to store _____.',
//         answers: [
//             { text: 'numbers and strings', correct: false },
//             { text: 'other arrays', correct: false },
//             { text: 'booleans', correct: false },
//             { text: 'all of the above', correct: false }
//         ]
//     },
//     {
//         question: 'Strign values must be enclosed within _____ when being assinged to variables',
//         answers: [
//             { text: 'commas', correct: false },
//             { text: 'curly brackets', correct: false },
//             { text: 'quotes', correct: false },
//             { text: 'parenthesis', correct: false }
//         ]
//     },
//     {
//         question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
//         answers: [
//             { text: 'JavaScript', correct: false },
//             { text: 'Terminal/bash', correct: false },
//             { text: 'for loops', correct: false },
//             { text: 'console.log', correct: false }
//         ]
//     }
// ]















// start button
// eventlistener for start button
// startButton.addEventListener("click", start)


// function start() {
//     startButton.classList.add('hidden')
//     shuffledQuestions = questions.sort(() => Math.random() - .5)
//     currentQuestionIndex = 0
//     questionContainerElement.classList.remove('hidden')
//     setNextQuestion()
//   }


//   function setNextQuestion() {
//     showQuestion(shuffledQuestions[currentQuestionIndex])
//   }

//   function showQuestion(question) {
//     questionElement.innertext = question.question
//   }





// // start function
// function start() {
//     console.log("start")
//     // "hidden" in css
//     startButton.classList.add("hidden")
//     questioncard.classList.remove("hidden")

//     // shuffledQuestions = questions.sort(() => Math.random() - .5)
//     // currentQuestionIndex = 0
//     nextQuestion()
// }

// function nextQuestion(question) {
//     questions.innertext = questiontext
//   }




// // function showQuestion(questiontext) {
// //     questions.innertext = questiontext
// // }






// // function nextQuestion(questions, ) {
// //     for (let i = 0; i < questions.length; i++) {
// //         questions[i] += 0;
// //     }
// // }






















