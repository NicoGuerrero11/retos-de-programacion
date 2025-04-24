#ui
print("--CALCULADORA--")
num1 = float(input("What's is the first number?: "))

while True:
    print("+")
    print("-")
    print("*")
    print("/")

    operation = input("pick an operation?: ")
    num2 = float(input("What's the next number?: "))


    #logic
    if operation == "+":
        resultado = num1+num2
        print(f"{num1} {operation} {num2} = {resultado}")
    elif operation == "-":
        resultado = num1-num2
        print(f"{num1} {operation} {num2} = {resultado}")
    elif operation == "*":
        resultado = num1*num2
        print(f"{num1} {operation} {num2} = {resultado}")
    elif operation == "/":
        resultado = num1/num2
        print(f"{num1} {operation} {num2} = {resultado}")
    
    print("seleccione 'y' si quiere continuar con el resultado...")
    print("seleccione 'n' si quiere comenzar de nuevo...")
    print("seleccione 's' si desea salir...")

    
    seleccion = input("agrege seleccion: ")
    if seleccion == 'y':
        num1 = resultado
    elif seleccion == 'n':
        num1 = float(input("What's is the first number?: "))
    else:
        print("gracias por usar la calculadora.")
        break

    


