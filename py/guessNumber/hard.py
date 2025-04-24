from random import randint

guessing_number = randint(1, 100)


def select_number():
    for i in range(5, 0, -1):
        number = int(input(f"{i} attempts remaining: "))
        if number < guessing_number:
            print("El numero a adivinar es mas grande")
        elif number > guessing_number:
            print("el numero a adivinar es mas chico")
        else:
            return f"CORRETO, HAS ENCONTRADO EL NUMERO: {guessing_number}"    
    return f"has ocupado todas tus oportunidades, el numero era {guessing_number}"


