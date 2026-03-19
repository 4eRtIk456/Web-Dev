# task 1 - say "Hello, World" With Python
print("Hello, World!")

# task 2 - Arithmetic Operators
a = int(input())
b = int(input())
print(a + b)
print(a - b)
print(a * b)

# task 3 - Python: Division
a = int(input())
b = int(input())
print(a // b)
print(a / b)

# task 4 - Loops
n = int(input())
for i in range(n):
    print(i ** 2)

# task 5 - sWAP cASE
w = input()
res = ""
for ch in w:
    if(ch.islower()):
        res+=ch.upper()
    else:
        res+=ch.lower()
print(res)

# task 6 - String split and join

def split_and_join(line):
    return "-".join(line.split(" "))

line = input()
print(split_and_join(line))

# task 7 - Lists
n = int(input())
a = []

for i in range(n):
    command = input().split()
    
    if command[0] == "insert":
        a.insert(int(command[1]), int(command[2]))
    elif command[0] == "print":
        print(a)
    elif command[0] == "remove":
        a.remove(int(command[1]))
    elif command[0] == "append":
        a.append(int(command[1]))
    elif command[0] == "sort":
        a.sort()
    elif command[0] == "pop":
        a.pop()
    elif command[0] == "reverse":
        a.reverse()

# task 8 - Whats your name?
def print_full_name(first, last):
    print(f"Hello {first} {last}! You just delved into python.")

first = input()
last = input()
print_full_name(first, last)

# task 9 - Nested Lists
n = int(input())
students = []

for i in range(n):
    name = input()
    grade = float(input())
    students.append([name, grade])

grades = sorted(set(s[1] for s in students))
second_lowest = grades[1]

names = sorted(s[0] for s in students if s[1] == second_lowest)
for name in names:
    print(name)

# task 10 - Capitalize!
print(input().title())