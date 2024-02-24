const questions = [
    {
        question: "HTML stands for _______",
        answers: [
            {text:"HyperText Marking Language", correct:false},
            {text:"HyperText Machine Language", correct:false},
            {text:"HyperText Markup Language", correct:true},
            {text:"HighText Marking Language", correct:false},
        ]
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is",
        answers: [
            {text:"Head, Title, HTML, body", correct:false},
            {text:"HTML, Body, Title, Head", correct:false},
            {text:"HTML, Head, Title, Body", correct:false},
            {text:"HTML, Head, Title, Body", correct:true},
        ]
    },
    {
        question:" Which of the following tag is used to define options in a drop-down selection list?",
        answers: [
            {text:"select tag", correct:false},
            {text:"list tag", correct:false},
            {text:"dropdown tag", correct:false},
            {text:"option tag", correct:true},
        ]
    },
    {
        question: "The hr tag in HTML is used for?",
        answers: [
            {text:"new line", correct:false},
            {text:"vertical ruler", correct:false},
            {text:"horizontal ruler", correct:true},
            {text:"new paragraph", correct:false},
        ]
    },
    {
        question: " Which of the following attribute is used to provide a unique name to an element?",
        answers: [
            {text:"class", correct:false},
            {text:"type", correct:false},
            {text:"id", correct:true},
            {text:"None of the above", correct:false},
        ]
    },
    {
        question: "Which HTML element is used for abbreviation or acronym?",
        answers: [
            {text:"abbr tag", correct:true},
            {text:"blockquote tag", correct:false},
            {text:"q tag", correct:false},
            {text:"em tag", correct:false},
        ]
    },//html ends
    {
        question: "What does CSS stand for?",
        answers: [
            {text:"Colorful Style Sheets", correct:false},
            {text:"Computer Style Sheets", correct:false},
            {text:"Cascading Style Sheets", correct:true},
            {text:"Creative Style Sheets", correct:false},
        ]
    },
    {
        question: "Which of the below CSS properties is used to change the background color of CSS ?",
        answers: [
            {text:"bg color", correct:false},
            {text:"color-background", correct:false},
            {text:"color", correct:false},
            {text:"background-color", correct:true},
        ]
    },
    {
        question: "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
        answers: [
            {text:"tag", correct:false},
            {text:"Class", correct:false},
            {text:"id", correct:true},
            {text:"Both atg and ckass", correct:false},
        ]
    },
    {
        question: "Which of the below is the correct syntax to put a line over text in CSS?",
        answers: [
            {text:"text-decoration : overline", correct:true},
            {text:"text-decoration : line", correct:false},
            {text:"text-decoration : none", correct:false},
            {text:"text-decoration : underline", correct:false},
        ]
    },
    {
        question: "Which below property of CSS is used to set the indentation of the first line in a block of text ?",
        answers: [
            {text:"text-underline-property", correct:false},
            {text:"text-decoration none", correct:false},
            {text:"text-indent-property", correct:true},
            {text:"text-overflow property", correct:false},
        ]
    },
    {
        question: "Which of the below CSS properties represent the order of flex items in the grid container ?",
        answers: [
            {text:"float", correct:false},
            {text:"overflow", correct:false},
            {text:"All of the above", correct:false},
            {text:"order", correct:true},
        ]
    },//css ends

    {
        question: "Which type of JavaScript language is ___?",
        answers: [
            {text:"Object-Oriented", correct:false},
            {text:"Object-Based", correct:true},
            {text:"Assembly-language", correct:false},
            {text:"High-level", correct:false},
        ]
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        answers: [
            {text:"Alternative to if-else", correct:false},
            {text:"Switch statement", correct:false},
            {text:"immediate if", correct:true},
            {text:"If-then-else statement", correct:false},
        ]
    },
    {
        question: "When interpreter encounters an empty statements, what it will do:",
        answers: [
            {text:"Shows a warning", correct:false},
            {text:"Throws an error", correct:false},
            {text:"Prompts to complete the statement", correct:false},
            {text:"Ignores the statements", correct:true},
        ]
    },
    {
        question: "The function and var are known as:",
        answers: [
            {text:"Declaration statements", correct:true},
            {text:"Keywords", correct:false},
            {text:"Data types", correct:false},
            {text:"Prototypes", correct:false},
        ]
    },
    {
        question:" In JavaScript, what is a block of statement?",
        answers: [
            {text:"Conditional block", correct:false},
            {text:"combines a number of statements into a single compound statement", correct:true},
            {text:"both conditional block and a single statement", correct:false},
            {text:"block that contains a single statement", correct:false},
        ]
    },
    {
        question: "Will the following JavaScript code work: \n var js = (function(x) {return x*x;}(10));",
        answers: [
            {text:"Exception will be thrown", correct:false},
            {text:"Memory leak", correct:false},
            {text:"Error", correct:false},
            {text:"Yes, perfectly", correct:true},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}! `;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();