import random
import db


def comparacion(famous1, famous2):
    if db.FAMOSOS[famous1] > db.FAMOSOS[famous2]:
        return True
    else:
        return False
    
def famoso():
    clave_random = random.choice(list(db.FAMOSOS.keys()))
    return clave_random

