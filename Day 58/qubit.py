from random import randrange


class Qubit:
    """Quick and dirty representation of a qubit"""
    def __init__(self, x=0, y=0, z=-1):
        self.x = x
        self.y = y
        self.z = z

    def __repr__(self):
        return f'Qubit(x={self.x}, y={self.y}, z={self.z})'

    def measure(self):
        if self.x + self.y == 0:
            if self.z > 0:
                return 1
            return 0
        return randrange(0, 2)


def x(q: Qubit) -> Qubit:
    return Qubit(q.x, q.y, -q.z)


def y(q: Qubit) -> Qubit:
    return Qubit(q.x, -q.y, q.z)


def z(q: Qubit) -> Qubit:
    return Qubit(-q.x, q.y, q.z)


def h(q: Qubit) -> Qubit:
    return Qubit(q.z, q.y, q.x)
