const answers = {
    1: "A",
    2: "B",
    3: "B",
    4: "A",
    5: "C",
};

let currentQuestion = 1;
let score = 0;

function checkAnswer(questionNumber, selectedAnswer) {
    const result = document.getElementById("quiz-result");
    const currentElement = document.querySelector(`.question.active`);

    // Feedback for correct/incorrect answers
    if (answers[questionNumber] === selectedAnswer) {
        score++;
        result.innerHTML = `<p style="color: green;">Correct!</p>`;
    } else {
        result.innerHTML = `<p style="color: red;">Incorrect. The correct answer was: ${
            answers[questionNumber]
        }</p>`;
    }

    // Delay before moving to the next question
    setTimeout(() => {
        result.innerHTML = ""; // Clear feedback
        currentElement.classList.remove("active");

        if (questionNumber < Object.keys(answers).length) {
            const nextElement = document.querySelector(
                `.question:nth-child(${questionNumber + 1})`
            );
            nextElement.classList.add("active");
        } else {
            displayResult();
        }
    }, 1500); // 1.5-second delay for feedback
}

function displayResult() {
    const quiz = document.getElementById("quiz");
    const trophy = document.getElementById("trophy");
    const result = document.getElementById("quiz-result");

    quiz.classList.add("hidden");

    if (score === Object.keys(answers).length) {
        trophy.style.display = "flex";
    } else {
        result.innerHTML = `<p>You got ${score}/5 correct. Try again to earn the trophy!</p>`;
    }
}
