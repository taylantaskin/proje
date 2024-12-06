const { getPriority } = require('os');
const readline = require('readline');

// Create a readline interface for terminal input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "1.Which country is known as the Land of the Rising Sun?",
    "2.Which country has the city of Paris as its capital?",
    "3.Which country is home to the Amazon Rainforest?",
    "4.Which country is famous for its pyramids?",
    "5.Which country is an island nation in the Indian Ocean?",
    "6.Which country is known for the Great Wall?",
    "7.Which country is home to the city of Sydney?",
    "8.Which country has the Eiffel Tower?",
    "9.Which country is known for its maple syrup?",
    "10.Which country has the most populous city, Tokyo?"
];

const options = [
    ["A. South Korea", "B. China", "C. Japan", "D. Vietnam"],
    ["A. Italy", "B. Spain", "C. France", "D. Belgium"],
    ["A. Argentina", "B. Peru", "C. Brazil", "D. Colombia"],
    ["A. Mexico", "B. Saudi Arabia", "C. Egypt", "D. Jordan"],
    ["A. Thailand", "B. Maldives", "C. Sri Lanka", "D. Philippines"],
    ["A. Japan", "B. India", "C. China", "D. Mongolia"],
    ["A. New Zealand", "B. Australia", "C. Canada", "D. South Africa"],
    ["A. Germany", "B. United Kingdom", "C. France", "D. Italy"],
    ["A. Norway", "B. Canada", "C. Sweden", "D. Denmark"],
    ["A. South Korea", "B. India", "C. Japan", "D. China"]
];

const correctOptions = ["C", "C", "C", "C", "B", "C", "B", "C", "B", "C"];

const explanations = [
    "Japan is often referred to as the 'Land of the Rising Sun'.",
    "Paris is the capital of France, which is famous for landmarks like the Eiffel Tower.",
    "Brazil is home to the Amazon Rainforest, the largest rainforest in the world.",
    "Egypt is famous for its ancient pyramids, especially the Great Pyramid of Giza.",
    "Sri Lanka is an island nation in the Indian Ocean, known for its beaches and tea plantations.",
    "China is known for the Great Wall, one of the most famous landmarks in the world.",
    "Australia is home to Sydney, famous for its Opera House and Harbour Bridge.",
    "France is home to the Eiffel Tower, a global cultural icon of France.",
    "Canada is known for its maple syrup, a popular product made from the sap of maple trees.",
    "Japan is home to Tokyo, the most populous city in the world."
];

let currentQuestionIndex = 0;
let answers = [];
let score = 0;

function askQuestion() {
    if (currentQuestionIndex < questions.length) {
        rl.question(`${questions[currentQuestionIndex]}\n${options[currentQuestionIndex].join('\n')}\nEnter A, B, C, or D: `, (userAnswer) => {
            userAnswer = userAnswer.toUpperCase().trim();
            
            if (["A", "B", "C", "D"].includes(userAnswer)) {
                answers.push(userAnswer);
                const correctAnswer = correctOptions[currentQuestionIndex];
                
                if (userAnswer === correctAnswer) {
                    score++;
                    console.log(`${userAnswer} is correct!`);
                } else {
                    console.log(`${userAnswer} is incorrect!`);
                }

                // Provide the explanation
                console.log(explanations[currentQuestionIndex]);
                console.log("--------------------------------------------------");
                
                currentQuestionIndex++;
                askQuestion();
            } else {
                console.log("Invalid choice! Please enter A, B, C, or D.");
                askQuestion(); // Re-prompt the user for a valid answer
            }
        });
    } else {
        displayResults();
    }
}

function displayResults() {
    const correctCount = answers.filter((answer, index) => answer === correctOptions[index]).length;
    const incorrectCount = answers.length - correctCount;

    console.log("\nQuiz Results:");
    console.log(`You answered ${correctCount} questions correctly!`);
    console.log(`You failed ${incorrectCount} questions.`);

    // Display evaluation based on score
    if (correctCount >= 9) {
        console.log("Excellent! You got 9 or more correct answers!");
    } else if (correctCount >= 6) {
        console.log("Good job! ");
    } else {
        console.log("You failed! Repeat the quiz. You need at least 5 correct answers to pass.");
    }

    console.log(`Total Score: ${correctCount}/${questions.length}`);
    rl.close();
}

// start from first question
askQuestion();
