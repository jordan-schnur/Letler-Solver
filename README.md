# Letler Solver - A Perfect Solver for Letler

## Introduction

Letler Solver is a Python-based perfect solver for [Letler](https://apps.apple.com/us/app/letler-spin-and-guess/id6670159055), an engaging word guessing game. This project was inspired by the fun and challenge presented by the Letler game, which I discovered on Reddit.

## About Letler

Letler is a word guessing game where players attempt to identify a hidden four-letter word. Unlike traditional word games, Letler only provides information on whether the target word comes alphabetically before or after each guess. This unique constraint makes it an intriguing puzzle and an excellent candidate for an efficient solving algorithm.

You can find and play the game here: [Letler on the App Store](https://apps.apple.com/us/app/letler-spin-and-guess/id6670159055)

## How It Works

The Letler Solver uses a binary search algorithm to efficiently guess the hidden word. This approach guarantees finding the word in the minimum number of guesses possible, making it a perfect solver for the game.

## Features

- Efficient binary search implementation
- Handles a comprehensive list of four-letter words
- User-friendly interface for inputting game responses
- Detailed output showing each guess and the final result

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/jordan-schnur/Letler-Solver.git
   ```

2. Navigate to the project directory:
   ```
   cd Letler-Solver
   ```

3. (Optional) Create and activate a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

4. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage

Run the solver:
```
python main.py
```

Follow the on-screen prompts to input responses from the Letler game. For each guess, indicate whether the target word comes before (b), after (a), or is correct (c).

## Contributing

Contributions to improve the Letler Solver are welcome! Please feel free to submit pull requests or open issues to suggest enhancements or report bugs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the creators of Letler for developing such an engaging word game.
