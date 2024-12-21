questions = ("1. Which country is known as the Land of the Rising Sun? ",
             "2. Which country has the city of Paris as its capital?",
             "3. Which country is home to the Amazon Rainforest?",
             "4. Which country is famous for its pyramids?",
             "5. Which country is an island nation in the Indian Ocean?",
             "6. Which country is known for the Great Wall?",
             "7. Which country is home to the city of Sydney?",
             "8. Which country has the Eiffel Tower?",
             "9. Which country is known for its maple syrup?",
             "10. Which country has the most populous city, Tokyo?")

options = (("A. South Korea", "B. China", "C. Japan", "D. Vietnam"),
           ("A. Italy", "B. Spain", "C. France", "D. Belgium"),
           ("A. Argentina", "B. Peru", "C. Brazil", "D. Colombia"),
           ("A. Mexico", "B. Saudi Arabia", "C. Egypt", "D. Jordan"),
           ("A. Thailand", "B. Maldives", "C. Sri Lanka", "D. Philippines"),
           ("A. Japan", "B. India", "C. China", "D. Mongolia"),
           ("A. New Zealand", "B. Australia", "C. Canada", "D. South Africa"),
           ("A. Germany", "B. United Kingdom", "C. France", "D. Italy"),
           ("A. Norway", "B. Canada", "C. Sweden", "D. Denmark"),
           ("A. South Korea", "B. India", "C. Japan", "D. China"))

correct_options = ("C", "C", "C", "C", "B", "C", "B", "C", "B", "C")

detailed_answers = ("Japan is often referred to as the \"Land of the Rising Sun\". \nIn ancient times, "
                    "the Japanese believed they were the first to see the sun rise in the East.",

                    "Paris, known as \"The City of Light,\" is the capital and largest city of France. "
                    "\nFamous for its art, culture, and landmarks like the Eiffel Tower.",

                    "The majority of the Amazon Rainforest, about 60%, is located in Brazil. "
                    "\nIt is the world's largest tropical rainforest and plays a crucial role "
                    "in regulating the global climate.",

                    "Egypt is renowned for its ancient pyramids, particularly the Pyramids of Giza. "
                    "\nThey are among the most famous and enduring symbols of ancient Egyptian civilization.",

                    "The Maldives is an island nation in the Indian Ocean. \nIt is known for its stunning coral reefs, "
                    "clear blue waters, and luxury resorts.",

                    "The Great Wall of China is a series of fortifications built along the northern borders of "
                    "China to protect against invasions. \nIt is one of the most iconic symbols of China.",

                    "Sydney is the largest city in Australia and is famous for its Sydney Opera House, "
                    "Harbour Bridge, and beautiful beaches.",

                    "The Eiffel Tower is a wrought-iron lattice tower located in Paris, France. \nIt was "
                    "constructed in 1889 and has since become a global icon of France and one of the most "
                    "recognizable structures in the world.",

                    "Canada is the world's largest producer of maple syrup, especially in the province of Quebec, "
                    "which accounts for about 70% of the world's supply.",

                    "Tokyo, the capital city of Japan, is the most populous metropolitan area in the world. "
                    "\nKnown for its blend of traditional culture and cutting-edge technology.")

question_index = 0
choices = []
score = 0
passed = 0
failed = 0

# Quiz Loop
for question in questions:
    print(question)
    for option in options[question_index]:
        print(option)
    choice = input("Enter A, B, C, or D: ").upper()
    choices.append(choice)
    if choice == correct_options[question_index]:
        print(f"{choice} is correct!")
        print(detailed_answers[question_index])
        score += 1  # Only increase score for correct answers
        passed += 1
    else:
        print(f"{choice} is incorrect!")
        print(detailed_answers[question_index])
        failed += 1

    question_index += 1
    print()

# Final result and total score printout
print("-    -    -    -    -    -")
print("-        !RESULT!        -")
print("-    -    -    -    -    -")

# Print answers
print("Your answers are: ", end=" ")
for choice in choices:
    print(choice, end=" ")
print()

# Print correct answers
print("The correct answers are: ", end=" ")
for correct_option in correct_options:
    print(correct_option, end=" ")
print()

# Print passed and failed counts
print(f"You answered {passed} questions correctly!")
print(f"You failed {failed} questions")

# Evaluation based on the number of correct answers
if passed < 5:
    print("Failed! Repeat the quiz.")
elif passed < 9:
    print("You Passed!")
else:
    print("Excellent! Keep it up.")

# Print total score after evaluation
print(f"Total Score: {score}/{len(questions)}")

