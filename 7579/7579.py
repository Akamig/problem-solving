import sys


def solution(N, M, m, c):
    n = sum(c)
    minMemory = [[0 for i in range(n+1)] for j in range(N+1)]
    for i in range(1, N+1):
        for j in range(1, n+1):
            if (j < c[i]):
                minMemory[i][j] = minMemory[i-1][j]
            else:
                minMemory[i][j] = max(minMemory[i-1][j],
                                      minMemory[i-1][j-c[i]] + m[i])
            if minMemory[i][j] >= M: 
                n = min(n, j)
    if M!=0:
        return n
    else:
        return 0


N, M = map(int, sys.stdin.readline().split())
m = [0] + list(map(int, sys.stdin.readline().split()))
c = [0] + list(map(int, sys.stdin.readline().split()))
print(solution(N, M, m, c))
