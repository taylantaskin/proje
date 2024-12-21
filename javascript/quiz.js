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
    "Japan is often referred to as the 'Land of the Rising Sun'. In ancient times, the Japanese believed they were the first to see the sun rise in the East.",
    "Paris, known as 'The City of Light,' is the capital and largest city of France. Famous for its art, culture, and landmarks like the Eiffel Tower.",
    "The majority of the Amazon Rainforest, about 60%, is located in Brazil. It is the world's largest tropical rainforest and plays a crucial role in regulating the global climate.",
    "Egypt is renowned for its ancient pyramids, particularly the Pyramids of Giza. They are among the most famous and enduring symbols of ancient Egyptian civilization.",
    "The Maldives is an island nation in the Indian Ocean. It is known for its stunning coral reefs, clear blue waters, and luxury resorts.",
    "The Great Wall of China is a series of fortifications built along the northern borders of China to protect against invasions. It is one of the most iconic symbols of China.",
    "Sydney is the largest city in Australia and is famous for its Sydney Opera House, Harbour Bridge, and beautiful beaches.",
    "The Eiffel Tower is a wrought-iron lattice tower located in Paris, France. It was constructed in 1889 and has since become a global icon of France and one of the most recognizable structures in the world.",
    "Canada is the world's largest producer of maple syrup, especially in the province of Quebec, which accounts for about 70% of the world's supply.",
    "Tokyo, the capital city of Japan, is the most populous metropolitan area in the world. Known for its blend of traditional culture and cutting-edge technology."
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

    // Display the results in the requested format
    console.log("-    -    -    -    -    -");
    console.log("-        !RESULT!        -");
    console.log("-    -    -    -    -    -");
    
    console.log("Your answers are: ", answers.join(" "));
    console.log("The correct answers are: ", correctOptions.join(" "));
    
    console.log(`You answered ${correctCount} questions correctly!`);
    console.log(`You failed ${incorrectCount} questions`);
    
    // Evaluation based on score
    if (correctCount >= 9) {
        console.log("Excellent! Keep it up.");
    } else if (correctCount >= 5) {
        console.log("Good job! ");
    } else {
        console.log("Failed! Repeat the quiz.");
    }
    
    console.log(`Total Score: ${correctCount}/${questions.length}`);
    rl.close();
}

// start from first question
askQuestion();
