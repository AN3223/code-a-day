from hashlib import sha256, md5

s: bytes = "hello".encode('utf-8')

md5_hash = md5()  # Creates a new, empty, hash object

md5_hash.update(s)
# Adds our bytestring to the hash (we could add more if we wanted to)

print(md5_hash.digest())
# The digest method tells it to take all
# the data it has and make a real hash out of it
print(md5_hash.digest())
# Data is the same as before, so there's no funny business, nice

print(sha256(s).digest())
# Other algorithms follow the same interface,
# and values can be passed into the constructor
# rather than the update() method, for brevity I assume
