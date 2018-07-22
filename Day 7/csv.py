from pandas import read_csv, DataFrame, date_range

df = read_csv('10000 Sales Records.csv')
# Selection syntax cheat sheet:
# df[column]
# df.loc[row, column]
# df.iloc[column]

""" df.columns
Index(['Region', 'Country', 'Item Type', 'Sales Channel', 'Order Priority',
       'Order Date', 'Order ID', 'Ship Date', 'Units Sold', 'Unit Price',
       'Unit Cost', 'Total Revenue', 'Total Cost', 'Total Profit'],
      dtype='object')
"""

""" df["Total Profit"].sum()
3950893471.9300003
"""

""" df.stack().iloc[:10]
0  Region            Sub-Saharan Africa
   Country                         Chad
   Item Type            Office Supplies
   Sales Channel                 Online
   Order Priority                     L
   Order Date                 1/27/2011
   Order ID                   292494523
   Ship Date                  2/12/2011
   Units Sold                      4484
   Unit Price                    651.21
dtype: object
"""


# New data frame
months = date_range('1/30/18', periods=12, freq='M')
df = DataFrame(
    {
        'Month': months,
        'Rainfall': [6,3,2,6,8,2,7,8,9,9,2,6]
    }
)
""" df
0  2018-01-31         6
1  2018-02-28         3
2  2018-03-31         2
3  2018-04-30         6
4  2018-05-31         8
5  2018-06-30         2
6  2018-07-31         7
7  2018-08-31         8
8  2018-09-30         9
9  2018-10-31         9
10 2018-11-30         2
11 2018-12-31         6
"""

""" df.groupby('Rainfall').sum()
              Month
Rainfall           
2               NaT
3        2018-02-28
6               NaT
7        2018-07-31
8               NaT
9               NaT
"""
# No clue what's happening here.
