class Solution:
    def firstUniqChar(self, s: str) -> int:
        for char in s:
            if s.count(char) == 1:
                return s.find(char)

        return -1
