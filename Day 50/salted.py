from string import ascii_lowercase, ascii_uppercase, digits
from hashlib import sha512
from random import choices

password = "password".encode('utf-8')
normal_hash = sha512(password).digest()

all_chars = ascii_uppercase + ascii_lowercase + digits
salt = "".join(choices(all_chars, k=32)).encode('utf-8')

salted_hash = sha512(password + salt).digest()

print(normal_hash)
print(salted_hash)

print(len(normal_hash))
print(len(salted_hash))
# Both are 64, always
