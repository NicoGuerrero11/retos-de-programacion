# ESTRUCTURA DE DATOS

# listas
my_list = ["nico", "marce", "mari", "agus", "gaby"]
print(my_list)
my_list.append("sam") # inserccion
print(my_list)
my_list.remove("mari") # eliminacion
print(my_list)
print(my_list[1]) # acceso
my_list[1] = "nacho"
print(my_list)
my_list.sort() # ordenacion
print(my_list)
print(type(my_list))

# tuplas
my_tuple = ("nico", "marce", "mari", "agus", "gaby")
print(my_tuple[1]) # acceso
print(my_tuple[3])
my_tuple = tuple(sorted(my_tuple)) #ordenacion (si no le agregamos 'tuple' lo ordena como una lista)
print(my_tuple)
print(type(my_tuple))

# sets
my_sets = {"nico", "marce", "mari", "agus", "gaby"}
print(my_sets)
my_sets.add("nacho") # inserccion
my_sets.remove("nico") # eliminacion
print(my_sets)
print(type(my_sets))

# diccionario

my_dict: dict = {
    "name": "nico",
    "surname" : "darth",
    "alias" : "belial",
    "age" : "23"
}
print(my_dict["name"]) # acceso
my_dict["email"] = "nicoguerrero@gmail.com" # inserccion
print(my_dict)
my_dict["age"] = "24" # actualizacion
print(my_dict)
del my_dict["surname"] # eliminacion
print(my_dict)
my_dict = dict(sorted(my_dict.items())) # ordenacion
print(my_dict)
print(type(my_dict))

"""
extra

"""

def my_agenda():

    agenda = {}

    def insert_contact():
        phone = input("Introduce el teléfono del contacto: ")
        if phone.isdigit() and len(phone) > 0 and len(phone) <= 11:
            agenda[name] = phone
        else:
            print(
                "Debes introducir un número de teléfono un máximo de 11 dígitos.")

    while True:

        print("")
        print("1. Buscar contacto")
        print("2. Insertar contacto")
        print("3. Actualizar contacto")
        print("4. Eliminar contacto")
        print("5. Salir")

        option = input("\nSelecciona una opción: ")

        match option:
            case "1":
                name = input("Introduce el nombre del contacto a buscar: ")
                if name in agenda:
                    print(
                        f"El número de teléfono de {name} es {agenda[name]}.")
                else:
                    print(f"El contacto {name} no existe.")
            case "2":
                name = input("Introduce el nombre del contacto: ")
                insert_contact()
            case "3":
                name = input("Introduce el nombre del contacto a actualizar: ")
                if name in agenda:
                    insert_contact()
                else:
                    print(f"El contacto {name} no existe.")
            case "4":
                name = input("Introduce el nombre del contacto a a eliminar: ")
                if name in agenda:
                    del agenda[name]
                else:
                    print(f"El contacto {name} no existe.")
            case "5":
                print("Saliendo de la agenda.")
                break
            case _:
                print("Opción no válida. Elige una opción del 1 al 5.")


my_agenda()

