class Solution:
    def isValid(self, s: str) -> bool:
        tagmap = {")": "(", "}": "{", "]": "["}
        stack = []
        for char in s:
            if char in tagmap.keys():
                pop = ""
                if stack:
                    pop = stack.pop()

                if tagmap[char] != pop:
                    return False
            else:
                stack.append(char)
        return not stack
