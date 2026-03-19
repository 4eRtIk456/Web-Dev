a = []
n = int(input())
for i in range(0, n):
    num = int(input())
    a.append(num)

for i in range(0, n):
    if a[i] % 2 == 0:
        print(a[i], end=" ")
