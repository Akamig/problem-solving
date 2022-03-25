import sys

def solution(N, W):
    C = [[0 for i in range(W+1)] for j in range(N+1)]
    weight = []
    value = []
    for i in range(N):
        w, v = map(int, sys.stdin.readline().split())
        weight.append(w)
        value.append(v)

    for i in range(1, N+1):
        for w in range(1, W+1):
            if weight[i-1] <= w:
                C[i][w] = max(value[i-1] + C[i-1][w-weight[i-1]], C[i-1][w])
            else:
                C[i][w] = C[i-1][w]
    print(C[N][W])


N, K = map(int, sys.stdin.readline().split())
solution(N, K)
