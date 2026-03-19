n = int(input())
a = []
for i in range(n):
    a.append(int(input()))

found = False
for i in range(1, n):
    if a[i] * a[i-1] > 0:
        found = True
        break

if found:
    print("YES")
else:
    print("NO")