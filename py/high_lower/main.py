import high_or_low as hl



#contador
count = 0

print("HIGH OR LOW GAME!!!\n")

#famosos
primer_famoso = hl.famoso()
segundo_famoso = hl.famoso()

while True:
    print(f"El primer famoso es: {primer_famoso}")
    print(f"El segundo famoso es: {segundo_famoso}")
    print("cual tiene mas seguidores? ")
    seleccion = int(input("seleccione (1) o (2):  "))

    if seleccion == 1:
        if hl.comparacion(primer_famoso, segundo_famoso):
            count += 1
            print(f"Muy bien!!, score: {count}")
            primer_famoso = segundo_famoso
            segundo_famoso = hl.famoso()
        else:
            print("\n\nlo siento, te equivocaste")
            print(f"final score: {count}")
            break
    elif seleccion == 2:
        if hl.comparacion(segundo_famoso, primer_famoso):
            count += 1
            print(f"Muy bien!!, score: {count}")
            primer_famoso = segundo_famoso
            segundo_famoso = hl.famoso()
        else:
            print("\n\nlo siento, te equivocaste")
            print(f"final score: {count}")
            break
    else:
        print("seleccion incorrecta, intente nuevamente")
        
