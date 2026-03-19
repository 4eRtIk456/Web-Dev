import math
people = int(input())
apples = int(input())
left = int(math.floor(apples/people))
print(apples-(people*left))