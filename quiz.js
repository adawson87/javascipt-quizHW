const   startButton = document.getElementById  ('startBtn')
const questionContainerElement = document.getElementById('question-container')
const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)




function startGame() {
    console.log('online')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort
    questionContainerElement.classList.remove('hide')
    setNextQuestion()


}

function setNextQuestion() {


}

function selectAnswer() {


}

const questions = [
    {
        questions: 'What is 2 + 2',
        answers: [
            {text: '4', correct: true },
            {text:  }
        ]

}]
