import coffes

def comparacion(cafe):
    ingredientes_necesarios = coffes.menu[cafe]["ingredients"]
    for ingrediente, cantidad_necesaria in ingredientes_necesarios.items():
        cantidad_disponible = coffes.report["ingredients"].get(ingrediente, 0)
        if cantidad_necesaria > cantidad_disponible:
            print(f"\n❌ No hay suficiente {ingrediente}. Se necesita {cantidad_necesaria}, hay {cantidad_disponible}.")
            return  # detenemos la función, no se puede preparar
    
    # Si pasó el chequeo, ahora descontamos los ingredientes
    for ingrediente, cantidad_necesaria in ingredientes_necesarios.items():
        coffes.report["ingredients"][ingrediente] -= cantidad_necesaria
        print(f"\n✅ {ingrediente} usado: -{cantidad_necesaria} (queda {coffes.report['ingredients'][ingrediente]})")

    # Sumamos el dinero al reporte
    coffes.report["money"] += coffes.menu[cafe]["cost"]
    print(f"💰 Se agregó ${coffes.menu[cafe]['cost']} al reporte. Total dinero: ${coffes.report['money']}")
    print("\nENJOY YOUR COFFEE...")

while True:
    print("\n\nWhat would you like?")
    print("1. espresso")
    print("2. latte")
    print("3. capuccino")
    caffe = input("select number please:  ")

    if caffe == '1':
        #espresso
        comparacion("espresso")
    elif caffe == '2':
        #late
        comparacion("latte")
    elif caffe == '3':
        #capuccino
        comparacion("capuccino")
    elif caffe == "report":
        #report
        print(coffes.report)
        
    elif caffe == "off":
        print("Turn off machine...")
        break
    else:
        print("incorrect selection, Try again")
