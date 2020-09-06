#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the countingValleys function below.
def countingValleys(n, s):
    sea_level = 0
    count = 0
    start_flg = False
    for i in range(n):
        step = s[i]
        if step == 'U':
            sea_level += 1
        else:
            sea_level -= 1

        if sea_level == -1:
            start_flg = True

        if start_flg and sea_level == 0:
            count += 1
            start_flg = False
    return count

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    s = input()

    result = countingValleys(n, s)

    fptr.write(str(result) + '\n')

    fptr.close()
