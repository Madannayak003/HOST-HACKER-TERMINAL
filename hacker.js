const chalk = require("chalk");
const readline = require("readline");

let running = true;
let paused = false;
let speed = 30;

// ===== KEY CONTROLS =====
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on("keypress", (_, key) => {
    if (key.name === "escape") process.exit();
    if (key.name === "space") paused = !paused;
    if (key.name === "+") speed = Math.max(5, speed - 5);
    if (key.name === "-") speed += 5;
});

// ===== STARTUP SEQUENCE =====
const startupLines = [
    "Initializing system...",
    "Loading kernel modules...",
    "Accessing secure server...",
    "Bypassing firewall...",
    "Decrypting data packets...",
    "Establishing remote connection...",
    "Access granted ✔",
    ""
];

let line = 0;
let char = 0;

console.clear();

function typeStartup() {
    if (!running) return;

    if (line < startupLines.length) {
        if (char < startupLines[line].length) {
            process.stdout.write(chalk.green(startupLines[line][char]));
            char++;
            setTimeout(typeStartup, 40);
        } else {
            process.stdout.write("\n");
            char = 0;
            line++;
            setTimeout(typeStartup, 200);
        }
    } else {
        showWelcome();
    }
}

function showWelcome() {
    console.log(chalk.green("Welcome, root@system"));
    console.log(chalk.green(">> System fully operational\n"));
    infiniteDump();
}

// ===== DATA DUMP =====
function randomLine() {
    const chars = "ABCDEF0123456789@$#%";
    let line = "";
    for (let i = 0; i < process.stdout.columns; i++) {
        line += chars[Math.floor(Math.random() * chars.length)];
    }
    return line;
}

function infiniteDump() {
    setInterval(() => {
        if (!paused) {
            console.log(chalk.green(randomLine()));
        }
    }, speed);
}

typeStartup();
