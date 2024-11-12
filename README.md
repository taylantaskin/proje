# Programming Langueage (305) Quiz Application

## Overview
This is a multi-language implementation of a simple geography quiz application. The quiz tests users' knowledge about different countries and their notable features through 10 multiple-choice questions. The same quiz logic has been implemented in three different programming languages to demonstrate cross-platform development and language-specific approaches.

## Implementations
```
- Python (quiz.py)
- JavaScript (quiz.js)
- C# (Quiz.cs)
```

## Features
```
- 10 Geography-related questions
- Multiple choice answers (A, B, C, D)
- Immediate feedback after each answer
- Brief explanations for each correct answer
- Final score calculation and performance evaluation
- Cross-platform compatibility
```

## Quiz Content
```
The quiz covers various geographical topics including:
- National capitals
- Famous landmarks
- Natural features
- Cultural aspects
- Geographical locations
```

## How It Works
```
1. Questions are presented one at a time
2. User selects an answer (A, B, C, or D)
3. Immediate feedback is provided
4. An explanation is shown for the correct answer
5. Final results display:
   - User's answers
   - Correct answers
   - Total score
   - Performance evaluation
```

## Scoring System
```
- Passing requires at least 5 correct answers
- Excellence award for 10 correct answers
- Below 5 correct answers is considered a fail
```

## Technical Details

### Python Version
```python
# Uses tuples for static data
questions = (...)
options = (...)
correct_options = (...)

# Run with
python quiz.py
```

### JavaScript Version
```javascript
// Array-based data structure
const questions = [...]
const options = [...]
const correctAnswers = [...]

// Run with
First install node https://nodejs.org/dist/v22.11.0/node-v22.11.0-x86.msi
Than use "node quiz.js" in terminal
```

### C# Version
```csharp
// Static readonly arrays
static readonly string[] questions = {...}
static readonly string[][] options = {...}
static readonly string[] correctAnswers = {...}

// Run with
dotnet run Quiz.cs
```

## Getting Started

### Prerequisites
```
- Python 3.x for Python version or https://www.programiz.com/python-programming/online-compiler/ (Online Compiler Python)
- Node.js for JavaScript version or https://www.programiz.com/javascript/online-compiler/ (Online Compiler JavaScript)
- .NET Framework/Core for C# version or https://www.programiz.com/csharp-programming/online-compiler/ (Online Compiler C#)
```

### Running the Applications
```bash
# Python
python quiz.py

# JavaScript
node quiz.js

# C#
dotnet run Quiz.cs
```

## Contributing
```
Feel free to fork this repository and submit pull requests. You can also:
1. Add new questions
2. Implement in other programming languages
3. Improve user interface
4. Add additional features
```

## Author
```
Taylan Taşkın
Amar Nezirevic
Harun Bandic
```

## Acknowledgments
```
- This project was created as a learning exercise in cross-language implementation
- Questions are based on general geography knowledge
- Special thanks to all contributors
```

## Project Structure
```
project-root/
│
├── src/
│   ├── Python/
│   │   └── quiz.py
│   ├── javascript/
│   │   └── quiz.js
│   └── c#/
│       └── Quiz.cs
│
├── README.md
└── LICENSE
```

## Contact
```
GitHub: [taylantaskin]
Email: [220302443@student.ius.edu.ba]
```
