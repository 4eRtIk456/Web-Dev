# 1
def string_times(str, n):
  return str * n

# 2
def string_splosion(str):
    result = ""
    for i in range(len(str)):
        result += str[:i+1]
    return result

# 3
def array_front9(nums):
  end = len(nums)
  if end > 4:
    end = 4
  
  for i in range(end):
    if nums[i] == 9:
      return True
  return False
# 4
def front_times(str, n):
    return str[:3] * n

# 5
def last2(str):
    if len(str) < 2:
        return 0
    last = str[-2:]
    count = 0
    for i in range(len(str) - 2):
        if str[i:i+2] == last:
            count += 1
    return count
# 6
def array123(nums):
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
            return True
    return False

# 7
def string_bits(str):
    return str[::2]

# 8
def array_count9(nums):
    return nums.count(9)


# 9
def string_match(a, b):
    count = 0
    for i in range(min(len(a), len(b)) - 1):
        if a[i:i+2] == b[i:i+2]:
            count += 1
    return count