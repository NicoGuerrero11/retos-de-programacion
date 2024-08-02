#Funciones

# Simple


def greet():
    print("Hola, Python!")


greet()

# Con retorno


def return_greet():
    return "Hola, Python!"


print(return_greet())

# Con un argumento


def arg_greet(name):
    print(f"Hola, {name}!")


arg_greet("Brais")

# Con argumentos


def args_greet(greet, name):
    print(f"{greet}, {name}!")


args_greet("Hi", "Brais")
args_greet(name="Brais", greet="Hi")

# Con un argumento predeterminado


def default_arg_greet(name="Python"):
    print(f"Hola, {name}!")


default_arg_greet("Brais")
default_arg_greet()

# Con argumentos y return


def return_args_greet(greet, name):
    return f"{greet}, {name}!"


print(return_args_greet("Hi", "Brais"))

# Con retorno de varios valores


def multiple_return_greet():
    return "Hola", "Python"


greet, name = multiple_return_greet()
print(greet)
print(name)

# Con un número variable de argumentos


def variable_arg_greet(*names):
    for name in names:
        print(f"Hola, {name}!")


variable_arg_greet("Python", "Brais", "MoureDev", "comunidad")

# Con un número variable de argumentos con palabra clave


def variable_key_arg_greet(**names):
    for key, value in names.items():
        print(f"{value} ({key})!")


variable_key_arg_greet(
    language="Python",
    name="Brais",
    alias="MoureDev",
    age=36
)

"""
Funciones dentro de funciones
"""


def outer_function():
    def inner_function():
        print("Función interna: Hola, Python !")
    inner_function()


outer_function()

"""
Funciones del lenguaje (built-in)
"""

print(len("MoureDev"))
print(type(36))
print("MoureDev".upper())

"""
Variables locales y globales
"""

global_var = "Python"


def hello_python():
    local_var = "Hola"
    print(f"{local_var}, {global_var}!")


print(global_var)
# print(local_var) No se puede acceder desde fuera de la función

hello_python()


# Ejercicio extra
def contando(a, b):
    count = 0
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print( a + b)
        elif i % 3 == 0:
            print( a)
        elif i % 5 == 0:
            print( b)
        else:
            print(i)
            count += 1
    return count
        
        

