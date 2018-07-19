from pandas import Series
# Homogeneous mutable (but size-immutable) array

xs = [1, 2, 3, 4]
xss = Series(xs)
print(xs[3])  # 4

hm = {'a': 1, 'b': 2}
hms = Series(hm)
print(hm['a'])  # 1
# Simple stuff, really similar to lists

from pandas import DataFrame
# Heterogeneous mutable 2D array

xsd = DataFrame([["John", 25], ["Jennifer", 35]], columns=["Name", "Age"])
print(xsd)  # Output below vv
"""
       Name  Age
0      John   25
1  Jennifer   35
"""
# First row is the index, next two are our columns

xsd_list_of_dict = DataFrame([{"Name": "John", "Age": 25}, {"Name": "Jennifer", "Age": 35}])
# Equivalent to last example

xsd_dict = DataFrame({"Name": ["John", "Jennifer"], "Age": [25, 35]})
# Also equivalent to last example

xsd["Eye color"] = ["Blue", "Green"]
# Adds a new column for eye color, John gets blue and Jennifer gets green

del xsd["Eye color"]
# Deletes the eye color column

jerryd = DataFrame({"Name": ["Jerry"], "Age": [45]})
xsd = xsd.append(jerryd, ignore_index=True)
# Adding a new row (ignore_index prevents DataFrame from having multiple of the same index)

print(xsd.loc[2])
# Selecting the new row

xsd = xsd.drop(2)
# Deleting the new row
