import hashlib
from datetime import datetime


class Block:
    def __init__(self, index=0, data=None, parent=None):
        self.data = "Block #{}".format(index) if data is None else data
        self.previous_hash = parent.hash if parent is not None else "0"
        self.index = index
        self.parent = parent
        self.timestamp = datetime.now()
        self.update_hash()

    def update_hash(self):
        self.hash = self.__hash__()

    def __hash__(self):
        string = str(self.index) + str(self.timestamp) + str(self.data) + str(self.previous_hash)
        return int(hashlib.sha256(string.encode()).hexdigest(), 16)


blockchain = [Block()]

for i in range(1, 20):
    block_to_add = Block(i, blockchain[i - 1])
    blockchain.append(block_to_add)
    previous_block = block_to_add

    print("Block #{} has been added to the blockchain!".format(block_to_add.index))
    print("Hash: {}\n".format(hex(block_to_add.hash)))
