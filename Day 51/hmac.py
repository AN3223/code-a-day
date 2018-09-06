import hmac


def message(msg: bytes, key: bytes):
    return msg, hmac.new(key, msg).digest()


key = b"super secret key"
message_recieved, hm = message(b"hello", key)
print(f'Message: {message_recieved}')

hm_check = hmac.new(key, message_recieved).digest()
check_result = "Yes" if hmac.compare_digest(hm, hm_check) else "No!"
print(f'Is the message authentic? {check_result}')

message_recieved, hm = message(b"hello", b"wrong key!")
hm_check = hmac.new(key, message_recieved).digest()
check_result = "Yes" if hmac.compare_digest(hm, hm_check) else "No!"
print(f'Is the message authentic? {check_result}')

# hmac's "compare_digest" function just returns x == y, but it aims 
# to prevent timing attacks. I assume it sleeps for a random amount 
# of time, or something like that.
