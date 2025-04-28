from turtle import Turtle, Screen

timmy = Turtle()
screen = Screen()


for _ in range(15):
    timmy.forward(10)
    timmy.penup()
    timmy.forward(10)
    timmy.pendown()

    

    

screen.exitonclick()
