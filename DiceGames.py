# -*- coding: utf-8 -*-
#Dice Games
import random

class Die:
    def __init__(self,s=6):
        self.sides = s
        self.shown = self.roll()

    def __str__(self):
        return " _ \n|"+str(self.shown)+"|\n -"
    
    def get_sides(self):
        return self.sides


    def roll(self):
        self.shown = random.randint(1,6)
        return self.shown


#This is how i'll make them physically path through the dice shape
class Graph:
    def __init__(self, n=6, e=4):
        pass

def show_d(hand):
    for d in hand:
        print(d)

def start_yahtzee():
    roll = [Die(),Die(),Die(),Die(),Die()]
    show_d(roll)
    return roll
    
def y_roll(old):
    for d in old:
        d.roll()
    show_d(old)
