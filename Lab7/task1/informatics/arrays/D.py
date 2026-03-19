a = []
n = int(input())
for i in range(0, n):
    num = int(input())
    a.append(num)
count = 0
for i in range(0, n):
    if(i != 0):
        if a[i] > a[i-1]:
            count+=1

print(count)
            
