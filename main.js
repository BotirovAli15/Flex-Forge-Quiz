let questions = [
    {
        question: "Используйте свойство justify-content, чтобы выровнять элементы по центру.",
        correctAnswer: "center"
    },
    {
        question: "Используйте свойство justify-content, чтобы выровнять элементы справа.",
        correctAnswer: "flex-end"
    },
    {
        question: "Используйте свойство justify-content, чтобы выровнять элементы слева.",
        correctAnswer: "flex-start"
    },
    {
        question: "Используйте свойство justify-content, чтобы распределить элементы косались края а в центре ровномерно.",
        correctAnswer: "space-between"
    },
    {
        question: "Используйте свойство justify-content, чтобы распределить лягушонков равномерно с одинаковами отступами.",
        correctAnswer: "space-around"
    }
];

let Try = 0;

let userForm = document.querySelector(".form");
let userInput = document.querySelector(".input");
let questionElement = document.getElementById("question");
let flexBox = document.querySelector(".flex-box");


function Question() {
    if (Try < questions.length) {
        questionElement.textContent = questions[Try].question;
    } else {
        alert("Вы завершили все вопросы!");
        questionElement.textContent = "Поздравляем! Вы завершили все вопросы.";
        userForm.style.display = "none";
    }
}

userForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let userAnswer = userInput.value.trim().toLowerCase();
    
    
    if (userAnswer === questions[Try].correctAnswer) {
        flexBox.style.justifyContent = userAnswer;
        alert("Ответ правильный!");
        Try++;
        Question();
    } else {
        alert("Неправильный ответ. Попробуйте снова.");
        console.log(`Правильный ответ от этого вопроса: ${questions[Try].correctAnswer}`);
    }
    userInput.value = "";
});


Question();
