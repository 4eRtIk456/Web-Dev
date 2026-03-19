def minimum(a, b, c, d):
    m = a
    if b < m:
        m = b
    if c < m:
        m = c
    if d < m:
        m = d
    return m

a = int(input())
b = int(input())
c = int(input())
d = int(input())
print(minimum(a, b, c, d))
    