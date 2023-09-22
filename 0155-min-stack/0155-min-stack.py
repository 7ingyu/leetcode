class MinStack:

    def __init__(self):
        self.head = None

    def push(self, val: int) -> None:
        self.head = {
            "val": val,
            "min": val if self.head is None else self.head["min"] if self.head["min"] < val else val,
            "prev": self.head
        }
        return

    def pop(self) -> None:
        val = self.head["val"]
        self.head = self.head["prev"]
        return val

    def top(self) -> int:
        return self.head["val"]

    def getMin(self) -> int:
        return self.head["min"]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()