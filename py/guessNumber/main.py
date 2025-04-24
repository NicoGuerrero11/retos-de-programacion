import easy
import hard

print("Welcome to the Number Guessing Game!")
print("you have te select a number beetwen 1 and 100\n")

while True:
    difficulty = input("Choose a difficulty. Type 'easy' or 'hard':  ").lower()
    if difficulty == 'easy':
        print("you have 10 attempts to guess the number")
        print(easy.select_number())
        break
    elif difficulty == 'hard':
        print("you have 5 attempts to guess the number")
        print(hard.select_number())
        break
    else:
        print("please select difficulty correctly...\n")