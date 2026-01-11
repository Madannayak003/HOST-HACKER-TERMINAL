import time
import random
import shutil
import msvcrt
import sys

paused = False
speed = 0.03

# ===== STARTUP SEQUENCE =====
startup_lines = [
    "Initializing system...",
    "Loading kernel modules...",
    "Accessing secure server...",
    "Bypassing firewall...",
    "Decrypting data packets...",
    "Establishing remote connection...",
    "Access granted ✔",
    ""
]

def type_startup():
    for line in startup_lines:
        for ch in line:
            print("\033[92m" + ch, end="", flush=True)
            time.sleep(0.04)
        print()
        time.sleep(0.2)

type_startup()

print("\033[92mWelcome, root@system")
print(">> System fully operational\n")

chars = "ABCDEF0123456789@$#%"

# ===== MAIN LOOP =====
while True:
    if msvcrt.kbhit():
        key = msvcrt.getch().decode(errors="ignore")
        if key == '\x1b':  # ESC
            break
        elif key == ' ':
            paused = not paused
        elif key == '+':
            speed = max(0.01, speed - 0.01)
        elif key == '-':
            speed += 0.01

    if not paused:
        width = shutil.get_terminal_size().columns
        line = ''.join(random.choice(chars) for _ in range(width))
        print("\033[92m" + line)

    time.sleep(speed)
