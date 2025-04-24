from random import randint

cart1 = randint(2, 11)
cart2 = randint(2, 11)

#cartas del jugador inicial
player_cart = [cart1, cart2]


def adding_cart():
    global player_cart
    if sum(player_cart) < 21:
        player_cart.append(randint(2,11))
    return player_cart

def suma_cart():
    global player_cart
    return sum(player_cart)


