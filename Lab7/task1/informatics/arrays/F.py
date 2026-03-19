n = int(input())
a = []
for i in range(n):
    a.append(int(input()))

count = 0
for i in range(1, n - 1):
    if a[i] > a[i-1] and a[i] > a[i+1]:
        count += 1

print(count)