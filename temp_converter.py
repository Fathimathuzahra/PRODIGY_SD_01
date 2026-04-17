temp = float(input("Enter temperature: "))
unit = input("Enter unit (C/F/K): ").upper()

if unit == "C":
    f = (temp * 9/5) + 32
    k = temp + 273.15
    print("Fahrenheit:", f)
    print("Kelvin:", k)

elif unit == "F":
    c = (temp - 32) * 5/9
    k = c + 273.15
    print("Celsius:", c)
    print("Kelvin:", k)

elif unit == "K":
    c = temp - 273.15
    f = (c * 9/5) + 32
    print("Celsius:", c)
    print("Fahrenheit:", f)

else:
    print("Invalid unit")