const chalk = require("chalk");
const readline = require("readline");

/* ===== STATE ===== */
let running = true;
let paused = false;
let speed = 40;
let loadingInProgress = false;

/* ===== KEY CONTROLS ===== */
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on("keypress", (_, key) => {
    if (!key) return;

    if (key.name === "escape") {
        console.clear();
        process.exit();
    }

    if (key.name === "space") paused = !paused;
    if (key.name === "+") speed = Math.max(10, speed - 5);
    if (key.name === "-") speed += 5;
});

/* ===== UTIL ===== */
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

/* ===== STARTUP STEPS ===== */
const startupSteps = [
    "Initializing system",
    "Loading BIOS modules",
    "Verifying hardware integrity",
    "CPU check",
    "Memory check",
    "Mounting virtual file system",
    "Loading kernel modules",
    "Resolving kernel dependencies",
    "Applying security policies",
    "Initializing network stack",
    "Requesting DHCP lease",
    "Accessing secure server",
    "Performing TLS handshake",
    "Validating encryption keys",
    "Bypassing firewall",
    "Decrypting data packets",
    "Reassembling data streams",
    "Establishing remote connection",
    "Authenticating credentials",
    "Session token accepted",
    "Remote host synchronized"
];

/* ===== BOOT SEQUENCE ===== */
async function boot() {
    console.clear();

    for (const step of startupSteps) {
        process.stdout.write(chalk.green(step + " █"));
        await sleep(Math.random() * 120 + 80);

        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);

        if (Math.random() < 0.2) {
            console.log(chalk.green(step) + " " + chalk.red("✖ FAILED"));
            console.log(chalk.yellow("Retrying..."));
            await sleep(700 + Math.random() * 800);
        }

        console.log(chalk.green(step) + " " + chalk.green("✔ OK"));
        await sleep(Math.random() * 300 + 150);
    }

    await runLoadingSequence();
}

/* ===== LOADING BAR ===== */
async function runLoadingSequence() {
    if (loadingInProgress) return;
    loadingInProgress = true;

    const steps = [5, 10, 25, 28, 30, 36, 40, 58, 66, 68, 70, 74, 80, 83, 84, 89, 92, 97];
    const barWidth = 30;

    console.log("\nLOADING...\n");

    for (const p of steps) {
        renderBar(p, barWidth);
        await sleep(850);
    }

    await sleep(3000);
    renderBar(100, barWidth);
    await sleep(2000);

    console.log(chalk.green("\n[ DONE ]"));
    console.log(chalk.green("Access granted ✔\n"));

    loadingInProgress = false;
    showWelcome();
}

function renderBar(percent, width) {
    const filled = Math.floor((percent / 100) * width);
    const bar =
        "[" +
        "|".repeat(filled) +
        " ".repeat(width - filled) +
        `] ${percent}%`;

    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(chalk.green(bar));
}

/* ===== WELCOME ===== */
function showWelcome() {
    console.log(chalk.green(">>> Welcome, root@system"));
    console.log(chalk.green(">>> System fully operational\n"));
    infiniteDump();
}

/* ===== DATA DUMP ===== */
function randomLine() {
    const chars = "ABCDEF0123456789@$#%";
    const width = process.stdout.columns || 80;
    let out = "";

    for (let i = 0; i < width; i++) {
        out += chars[Math.floor(Math.random() * chars.length)];
    }
    return out;
}

function infiniteDump() {
    setInterval(() => {
        if (!paused) {
            console.log(chalk.green(randomLine()));
        }
    }, speed);
}

/* ===== START ===== */
boot();
