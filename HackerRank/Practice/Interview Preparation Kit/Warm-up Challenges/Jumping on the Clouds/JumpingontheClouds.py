#!/bin/python3

import math
import os
import random
import re
import sys

#6
#0 0 0 1 0 0
# Complete the jumpingOnClouds function below.
def jumpingOnClouds(c):
    count = 0
    prev = 0

    for i, _ in enumerate(c):
        if i < prev:
            continue

        if len(c)-1 >= i+2 and c[i+2] != 1:
            count += 1
            prev += 2
        elif len(c)-1 >= i+1 and c[i+1] != 1:
            count += 1
            prev += 1
    return count


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    c = list(map(int, input().rstrip().split()))

    result = jumpingOnClouds(c)

    fptr.write(str(result) + '\n')

    fptr.close()
