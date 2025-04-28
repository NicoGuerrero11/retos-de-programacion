import turtle

# Configuramos la pantalla
pantalla = turtle.Screen()
pantalla.bgcolor("white")

# Creamos la tortuga
tortuga = turtle.Turtle()
tortuga.speed(5)  # Velocidad de la tortuga

# Dibuja polígonos de 3 a 10 lados
for lados in range(3, 11):  # De 3 a 10 lados
    for _ in range(lados):
        tortuga.forward(50)  # Lado de longitud fija
        tortuga.left(360 / lados)  # Giro en grados
    
    # Después de terminar un polígono

screen = turtle.Screen()
screen.exitonclick()
