n = int(input())
a = []
for i in range(n):
    a.append(int(input()))

for i in range(n - 1, -1, -1):
    print(a[i], end=" ")