import computer as c
import player as p


print("---!! BLACKJACK !!---\n")

print(f"Your initial carts {p.player_cart}, current score: {p.suma_cart()}")
print(f"Computer firt's cart: {c.computer_cart}\n\n")

#player game
while True:
    seleccion = input("seleccion 'y' si quiere otra carta; 'n' si desea detenerse: ").lower()
    if seleccion == "y":
        p.adding_cart()
        print(f"Your carts {p.player_cart}, current score: {p.suma_cart()}\n")
        if p.suma_cart() >= 21:
            break
    elif seleccion == 'n':
        print(f"final player score: {p.suma_cart()}")
        break
    else:
        print("no selecciono correctamente, intente nuevamente")

#computer game
while True:
    if c.computer_cart < 21 and c.computer_cart < p.suma_cart():
        c.computer_carts()
    else:
        print(f"final computer score: {c.computer_cart}")
        break


#find the winner
if c.computer_cart > 21 and p.suma_cart() <= 21:
    print("PLAYER WIN!!!")
    print(p.suma_cart())
elif c.computer_cart <= 21 and p.suma_cart() > 21:
    print("Computer win")
    print(c.computer_cart)
elif p.suma_cart() > c.computer_cart:
    print("PLAYER WIN!!!")
    print(p.suma_cart())
else:
    print("Computer win")
    print(c.computer_cart)






