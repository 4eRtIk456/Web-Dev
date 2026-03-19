# 1
def hello_name(name):
    return "Hello " + name + "!"

# 2
def make_out_word(out, word):
    return out[:2] + word + out[2:]

# 3
def first_half(str):
  size = len(str) / 2
  return str[:size]

# 4
def non_start(a, b):
  return a[1:]+b[1:]

# 5
def make_abba(a, b):
  return a + b + b + a

# 6
def extra_end(str):
    return str[-2:] * 3

# 7
def without_end(str):
  size = len(str)
  return str[1:size-1]

# 8
def make_tags(tag, word):
  return "<" + tag + ">" + word + "</" + tag + ">"

# 9
def first_two(str):
  return str[:2]

# 10
def left2(str):
    return str[2:] + str[:2]

# 11
def combo_string(a, b):
    if len(a) < len(b):
        return a + b + a
    return b + a + b