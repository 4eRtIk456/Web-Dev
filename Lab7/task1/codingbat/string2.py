# 1
def double_char(str):
  res = ""
  for i in range(0, len(str)):
    res += str[i]*2
  return res

# 2
def count_hi(str):
  return str.count("hi")

# 3
def cat_dog(str):
  return str.count("cat") == str.count("dog")

# 4
def count_code(str):
    count = 0
    for i in range(len(str) - 3):
        if str[i:i+2] == "co" and str[i+3] == "e":
            count += 1
    return count

# 5
def end_other(a, b):
    a = a.lower()
    b = b.lower()
    return a.endswith(b) or b.endswith(a)

# 6
def xyz_there(str):
    for i in range(len(str) - 2):
        if str[i:i+3] == "xyz" and (i == 0 or str[i-1] != "."):
            return True
    return False