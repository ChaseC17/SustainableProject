// Initialize the map
function initMap() {
    const atlanticCounty = { lat: 39.3643, lng: -74.4229 }; // Center of Atlantic County, NJ
    const map = new google.maps.Map(document.getElementById("map-container"), {
        zoom: 10,
        center: atlanticCounty,
    });

    // Example markers (replace with actual business data)
    const businesses = [
        { position: { lat: 39.355, lng: -74.445 }, title: "Business 1" },
        { position: { lat: 39.365, lng: -74.422 }, title: "Business 2" },
    ];

    businesses.forEach((business) => {
        new google.maps.Marker({
            position: business.position,
            map: map,
            title: business.title,
        });
    });
}
// Slideshow functionality
const images = document.querySelectorAll(".slideshow-image");
let currentIndex = 0;

function showNextImage() {
    // Remove the "active" class from the current image
    images[currentIndex].classList.remove("active");

    // Increment index (loop back to the start if at the end)
    currentIndex = (currentIndex + 1) % images.length;

    // Add the "active" class to the new image
    images[currentIndex].classList.add("active");
}

// Start the slideshow (change image every 5 seconds)
setInterval(showNextImage, 5000);

// Initialize the first image as active
images[0].classList.add("active");
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
