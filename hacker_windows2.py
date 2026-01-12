import time
import random
import shutil
import msvcrt
import sys
import os

# ===== STATE =====
paused = False
speed = 0.03
running = True
loading_done = False

GREEN = "\033[92m"
RED = "\033[91m"
YELLOW = "\033[93m"
RESET = "\033[0m"

# ===== UTILS =====
def clear():
    os.system("cls")

def sleep(ms):
    time.sleep(ms / 1000)

# ===== STARTUP STEPS =====
startup_steps = [
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
]

# ===== BOOT SEQUENCE =====
def boot():
    clear()
    for step in startup_steps:
        print(GREEN + step + " █", end="", flush=True)
        sleep(random.randint(80, 200))

        print("\r" + " " * (len(step) + 4), end="\r")

        # random failure (20%)
        if random.random() < 0.2:
            print(GREEN + step + " " + RED + "✖ FAILED" + RESET)
            print(YELLOW + "Retrying..." + RESET)
            sleep(random.randint(700, 1500))

        print(GREEN + step + " ✔ OK" + RESET)
        sleep(random.randint(150, 400))

    run_loading_sequence()

# ===== LOADING BAR =====
def render_bar(percent, width):
    filled = int((percent / 100) * width)
    bar = "[" + "|" * filled + " " * (width - filled) + f"] {percent}%"
    print("\r" + GREEN + bar + RESET, end="", flush=True)

def run_loading_sequence():
    global loading_done

    steps = [5, 10, 25, 28, 30, 36, 40, 58, 66, 68, 70, 74, 80, 83, 84, 89, 92, 97]
    bar_width = 30

    print("\n\nLOADING...\n")
    for p in steps:
        render_bar(p, bar_width)
        sleep(850)

    # pause at 97%
    sleep(3000)
    render_bar(100, bar_width)
    sleep(2000)

    print("\n" + GREEN + "[ DONE ]" + RESET)
    print(GREEN + "Access granted ✔\n" + RESET)

    loading_done = True
    show_welcome()

# ===== WELCOME =====
def show_welcome():
    print(GREEN + ">>> Welcome, root@system" + RESET)
    print(GREEN + ">>> System fully operational\n" + RESET)
    infinite_dump()

# ===== DATA DUMP =====
chars = "ABCDEF0123456789@$#%"

def random_line():
    width = shutil.get_terminal_size().columns
    return ''.join(random.choice(chars) for _ in range(width))

def infinite_dump():
    global paused, speed, running

    while running:
        if msvcrt.kbhit():
            key = msvcrt.getch().decode(errors="ignore")

            if key == '\x1b':  # ESC
                print("\n" + RED + "[ PROCESS HALTED ]" + RESET)
                break
            elif key == ' ':
                paused = not paused
            elif key == '+':
                speed = max(0.01, speed - 0.01)
            elif key == '-':
                speed += 0.01

        if not paused:
            print(GREEN + random_line() + RESET)

        time.sleep(speed)

# ===== START =====
boot()
