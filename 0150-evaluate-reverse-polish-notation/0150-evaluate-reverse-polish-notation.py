import math

class Solution(object):
    def evalRPN(self, tokens):
        """
        :type tokens: List[str]
        :rtype: int
        
        """
        stack = []
        operators = ["+", "-", "*", "/"]
        for item in tokens:
            if item not in operators:
                stack.append(float(item))
            else:
                y = stack.pop()
                x = stack.pop()
                val = None
                if item == '+':
                    val = x + y
                elif item == '-':
                    val = x - y
                elif item == '*':                    
                    val = x * y
                elif item == '/':
                    val = math.trunc(x / y)
                stack.append(val)
        return int(stack.pop())
        