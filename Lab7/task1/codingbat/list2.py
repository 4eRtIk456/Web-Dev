# 1
def count_evens(nums):
    count = 0
    for n in nums:
        if n % 2 == 0:
            count += 1
    return count


# 2
def big_diff(nums):
    return max(nums) - min(nums)


# 3
def centered_average(nums):
    nums_sorted = sorted(nums)
    return sum(nums_sorted[1:-1]) // (len(nums_sorted) - 2)


# 4
def sum13(nums):
    total = 0
    skip = False
    for n in nums:
        if skip:
            skip = False
            continue
        if n == 13:
            skip = True
            continue
        total += n
    return total


# 5
def sum67(nums):
    total = 0
    ignore = False
    for n in nums:
        if n == 6:
            ignore = True
        elif n == 7 and ignore:
            ignore = False
        elif not ignore:
            total += n
    return total


# 6
def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i + 1] == 2:
            return True
    return False