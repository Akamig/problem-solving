import sys
import math
n = int(sys.stdin.readline())
cases = [list(map(int, sys.stdin.readline().split(' '))) for i in range(n)]

for i in range(n):
    tm, tn = cases[i][0], cases[i][1]
    print(math.factorial(tn) // math.factorial(tn-tm) // math.factorial(tm))
