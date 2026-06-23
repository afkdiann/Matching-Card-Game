# Matching Card Game

A simple and interactive browser-based memory match card game. The goal is to flip cards and find matching pairs using as few clicks as possible. 

## How to Play

1. Click any face-down card to flip it and reveal its image
2. Click a second card to try to find a match
3. If the two cards **match**, they stay face-up (you have found a pair)
4. If they **don't match**, both cards flip back over after a short delay
5. Every card click increases your **score by 1**
6. Find all 8 pairs to win. Press **Reset** to start a new game at any time

## Features

- **4×4 grid** of 16 cards (8 unique pairs)
- **Randomized layout** on every new game
- **Score tracking**: counts total clicks; fewer clicks = better performance
- **End-game feedback** based on your final score
- **Reset button** to shuffle and start over instantly
- **Help page** with instructions on how to play the game

## Project Structure

```
Matching-Card-Game/
├── index.html                # Main game page
├── indexStyle.css            # Styles for the game board
├── script.js                 # Game logic (shuffle, flip, match, score)
├── help.html                 # Instructions page
├── helpStyle.css             # Styles for the help page
└── assets/
    ├── back.png              # Card back image
    ├── background.png        # Browser background image
    ├── 1.png – 8.png         # Card face images (8 unique)
```

## Getting Started

1. **Clone or download** this repository
2. Open `index.html` in any modern web browser
3. Start playing!

## Built With

- **HTML5**: Game structure and layout
- **CSS3**: Styling and visual presentation
- **Vanilla JavaScript**: Game logic, card shuffling, match detection, and score tracking
