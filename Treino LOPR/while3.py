import random

i = int(input("Quantos números você quer analisar"))

while i > 0 :
    numero = [random.randint(1, 100)]

    if numero % 2 == 0:
        print(numero, "PAR")
    else :
        print(numero, "IMPAR");
    i -= 1