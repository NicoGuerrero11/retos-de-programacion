from random import randint

computer_cart = randint(2, 11)
print(computer_cart)

def computer_carts():
    global computer_cart
    random_number = randint(2, 11)
    if computer_cart < 21:
        computer_cart += random_number
    return computer_cart



