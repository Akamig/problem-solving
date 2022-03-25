import sys
from collections import deque
def dfs(n, s, visited):
    visited.append(s)
    for i in range(1, len(n)):
        if n[s][i] == 1 and i not in visited:
            dfs(n, i, visited)
    return visited
        
def bfs(n, s):
    queue = deque([s])
    visit = [s]
    while queue:
        k = queue.popleft()
        for i in range(1, len(n)):
            if n[k][i] == 1 and i not in visit:
                queue.append(i)
                visit.append(i)
    return visit

    

def main():
    V, E, S = map(int, sys.stdin.readline().split())
    matrix = [[0] * (V+1) for i in range(V+1)]
    for i in range(E):
        a, b = map(int, sys.stdin.readline().split())
        matrix[a][b] = 1
        matrix[b][a] = 1

    print(' '.join(map(str, dfs(matrix, S, []))))
    print(' '.join(map(str, bfs(matrix, S))))
    exit()

main()
