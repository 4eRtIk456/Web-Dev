def Xor(x, y):
    return (x or y) and not (x and y)

x = int(input())
y = int(input())
print(1 if Xor(x, y) else 0)