using System;
using System.Collections.Generic;

class Quiz
{
    static readonly string[] questions = {
        "1. Which country is known as the Land of the Rising Sun? ",
        "2. Which country has the city of Paris as its capital?",
        "3. Which country is home to the Amazon Rainforest?",
        "4. Which country is famous for its pyramids?",
        "5. Which country is an island nation in the Indian Ocean?",
        "6. Which country is known for the Great Wall?",
        "7. Which country is home to the city of Sydney?",
        "8. Which country has the Eiffel Tower?",
        "9. Which country is known for its maple syrup?",
        "10. Which country has the most populous city, Tokyo?"
    };

    static readonly string[][] options = {
        new[] { "A. South Korea", "B. China", "C. Japan", "D. Vietnam" },
        new[] { "A. Italy", "B. Spain", "C. France", "D. Belgium" },
        new[] { "A. Argentina", "B. Peru", "C. Brazil", "D. Colombia" },
        new[] { "A. Mexico", "B. Saudi Arabia", "C. Egypt", "D. Jordan" },
        new[] { "A. Thailand", "B. Maldives", "C. Sri Lanka", "D. Philippines" },
        new[] { "A. Japan", "B. India", "C. China", "D. Mongolia" },
        new[] { "A. New Zealand", "B. Australia", "C. Canada", "D. South Africa" },
        new[] { "A. Germany", "B. United Kingdom", "C. France", "D. Italy" },
        new[] { "A. Norway", "B. Canada", "C. Sweden", "D. Denmark" },
        new[] { "A. South Korea", "B. India", "C. Japan", "D. China" }
    };

    static readonly string[] correctOptions = { "C", "C", "C", "C", "B", "C", "B", "C", "B", "C" };

    static readonly string[] detailedAnswers = {
        "Japan is often referred to as the \"Land of the Rising Sun\". \nIn ancient times, the Japanese believed they were the first to see the sun rise in the East.",
        "Paris, known as \"The City of Light,\" is the capital and largest city of France. \nFamous for its art, culture, and landmarks like the Eiffel Tower.",
        "The majority of the Amazon Rainforest, about 60%, is located in Brazil. \nIt is the world's largest tropical rainforest and plays a crucial role in regulating the global climate.",
        "Egypt is renowned for its ancient pyramids, particularly the Pyramids of Giza. \nThey are among the most famous and enduring symbols of ancient Egyptian civilization.",
        "The Maldives is an island nation in the Indian Ocean. \nIt is known for its stunning coral reefs, clear blue waters, and luxury resorts.",
        "The Great Wall of China is a series of fortifications built along the northern borders of China to protect against invasions. \nIt is one of the most iconic symbols of China.",
        "Sydney is the largest city in Australia and is famous for its Sydney Opera House, Harbour Bridge, and beautiful beaches.",
        "The Eiffel Tower is a wrought-iron lattice tower located in Paris, France. \nIt was constructed in 1889 and has since become a global icon of France and one of the most recognizable structures in the world.",
        "Canada is the world's largest producer of maple syrup, especially in the province of Quebec, which accounts for about 70% of the world's supply.",
        "Tokyo, the capital city of Japan, is the most populous metropolitan area in the world. \nKnown for its blend of traditional culture and cutting-edge technology."
    };

    static void Main(string[] args)
    {
        List<string> choices = new List<string>();
        int score = 0;
        int passed = 0;
        int failed = 0;

        for (int questionIndex = 0; questionIndex < questions.Length; questionIndex++)
        {
            Console.WriteLine(questions[questionIndex]);
            
            foreach (string option in options[questionIndex])
            {
                Console.WriteLine(option);
            }

            Console.Write("Enter A, B, C, or D: ");
            string choice = Console.ReadLine()?.Trim().ToUpper() ?? "";
            choices.Add(choice);

            if (choice == correctOptions[questionIndex])
            {
                Console.WriteLine($"{choice} is correct!");
                Console.WriteLine(detailedAnswers[questionIndex]);
                score++;
                passed++;
            }
            else
            {
                Console.WriteLine($"{choice} is incorrect!");
                Console.WriteLine(detailedAnswers[questionIndex]);
                score--;
                failed++;
            }

            Console.WriteLine();
        }

        Console.WriteLine("-    -    -    -    -    -");
        Console.WriteLine("-        !RESULT!        -");
        Console.WriteLine("-    -    -    -    -    -");

        Console.Write("Your answers are: ");
        Console.WriteLine(string.Join(" ", choices));

        Console.Write("The correct answers are: ");
        Console.WriteLine(string.Join(" ", correctOptions));

        Console.WriteLine($"You answered {passed} questions correctly!");
        Console.WriteLine($"You failed {failed} questions");

        if (passed < 5)
        {
            Console.WriteLine("Failed! Repeat the quiz.");
        }
        else if (passed < 9)
        {
            Console.WriteLine("You Passed!");
        }
        else
        {
            Console.WriteLine("Excellent! Keep it up.");
        }

        Console.WriteLine("\nPress any key to exit...");
        Console.ReadKey();
    }
}