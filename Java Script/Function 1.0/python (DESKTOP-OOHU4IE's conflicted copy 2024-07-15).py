# Nextwave test

# def convert_to_number(text):

#   total = 0
#   for char in text:
#     char_value = ord(char.upper()) - ord('A') + 1
#     total += char_value * (26**(len(text) - 1 - char.upper().index(char)))
#   return total

# def convert_to_column_number(column_label):
#   total = 0
#   for char in column_label:
#     char_value = ord(char) - ord('A') + 1
#     total += char_value
#   return total
# column_label = (input())
# numerical_value = convert_to_column_number(column_label)
# print(numerical_value)

def find_missing_number(arr):
  if not arr:
    return 0
  largest = max(arr) + 1
  freq_arr = [0] * (largest + 1) 
  for num in arr:
    if 0 <= num < largest:
      freq_arr[num] += 1
  for i in range(largest + 1):
    if freq_arr[i] == 0:
      return i
  return largest
result = find_missing_number()
print(result)