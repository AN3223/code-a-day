from sqlalchemy import create_engine

engine = create_engine("sqlite:///:memory:", echo=False)
engine.execute("""
CREATE TABLE IF NOT EXISTS Users (
    id INTEGER UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    birthdate DATE NOT NULL,
    joindate DATE NOT NULL
)
""")

engine.execute("""
INSERT INTO Users VALUES (1, "JerryJ35", "1982-8-08", "2018-10-19")
""")

result = engine.execute("SELECT * FROM Users")
for row in result:
    print(row)
