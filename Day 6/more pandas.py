from pandas import date_range, DataFrame
from numpy import nan

dates = date_range("20180720", periods=4)
df = DataFrame(
    {
        "Date": dates,
        "Event": ["Buy groceries", "Mow lawn", "Trim hedges", nan]
    }
)
""" df:
        Date          Event
0 2018-07-20  Buy groceries
1 2018-07-21       Mow lawn
2 2018-07-22    Trim hedges
3 2018-07-23            NaN
"""
df.loc[:2].Event  # Event column of first 3 rows
df.iloc[:3].Event  # Equivalent to last
df.columns  # All of the columns
df.values  # All of the values of all of the columns
df.index  # The index
df.describe()  # Statistics about the table
df.T  # The transposed table, columns are rows and rows are columns
df[df.Event == "Mow lawn"]  # Gets the row where Event == "Mow lawn"
df.iloc[3] = df.iloc[3].fillna(value="Buy a car")  # Replace empty value on row 4 with "Buy a car"

df = DataFrame(
    {
        "Player": ["Jerry", "Jonathan", "Michael", "Jennifer"],
        "Points": [10, 12, 8, 16],
        "Fouls": [0, 2, 0, 1]
    }
)
df.describe()
"""
         Points     Fouls
count   4.00000  4.000000
mean   11.50000  0.750000
std     3.41565  0.957427
min     8.00000  0.000000
25%     9.50000  0.000000
50%    11.00000  0.500000
75%    13.00000  1.250000
max    16.00000  2.000000
"""
# Lots of cool statistics!
