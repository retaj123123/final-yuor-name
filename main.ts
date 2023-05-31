default on_button_bressed_a():
        basic.show_icon(IconNames.Heart)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global h
    for index in range(4):
        pass 
    basic.show_number(h)
    h +=2
input.on_gesture(Gesture.Shake, on_gesture_shake)

def on_button_pressed_eb():
    if g >= 90:
        basic.show_string("amazing")
    elif g >= 50
        basic.show_string("traversed")
    else:
        basic.show_string("Good look")
input.on_button_pressed_b():

def on_button_pressed_b():
    global m
    m += 1
    basic.shwo_numbar(m)
input.on_button_pressed(Button.B, on_button_pressed_b)

m = 0
h = 0
g = 0
basic.show_string("retaj")
g = 25