class Solution:
    def reverse(self, x: int):
        max_int = 2**31 -1
        result = 0

        if x > max_int:
            return 0

        if x < 0:
            result = -int(str(abs(x))[::-1])
        else:
            result = int(str(x)[::-1])

        if abs(result) > max_int:
            return 0

        return result
