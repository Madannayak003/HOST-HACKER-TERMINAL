# 💻 Infinite Hacker Terminal Simulator

A full-screen **cinematic hacker terminal simulation** built with **HTML, CSS, and JavaScript**.  
It features a **Matrix rain background**, **realistic boot sequence**, **animated loading bar**, and an **infinite fake data dump** — inspired by classic cyberpunk / hacker movies.

##  Features

###  Terminal Experience
- Full-screen hacker-style terminal
- Green glowing monospace text
- Infinite fake hexadecimal & system log dump
- Auto-scrolling output

### Realistic Boot Sequence
- Step-by-step system initialization
- Randomized delays for realism
- Green ✔ success and red ✖ failure indicators
- Fake retry logic (`Retrying...`)
- Blinking terminal cursor during boot

###  Animated Loading Bar
- Single centered loading bar (no spam)
- Smooth percentage-based progression
- Pause at 97% for realism
- Completes at 100% → `[ DONE ]`
- Runs **only once at startup**

### Matrix Rain Background
- Canvas-based Matrix effect
- Responsive to screen size
- Runs behind terminal text

### Interactive Controls
| Key | Action |
|----|-------|
| `SPACE` | Pause / Resume output |
| `+` | Increase speed |
| `-` | Decrease speed |
| `A` | Toggle alerts |
| `C` | Toggle fake commands |
| `ESC` | Halt process |
| `R` | Restart (after halt) |

### Mobile Support
- Touch screen opens keyboard
- Works on mobile browsers
- Invisible input captures keystrokes

---

## Technologies Used

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **Canvas API** (Matrix rain)
- No external libraries
- No frameworks

---

## Project Structure

hacker-terminal/
            │
            ├── index.html
            ├── hacker.js
            ├── hacker_windows.py
            ├── README.md


# How to Run
# Option 1: Open Directly
1. Download or clone the repository
2. Open `index.html` in any modern browser

### Option 2: Live Server (Recommended)

npm install -g live-server
live-server
