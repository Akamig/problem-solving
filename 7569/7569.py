import sys
from collections import deque
M, N = map(int, sys.stdin.readline().split(' '))
TOMATO_BOX = [list(map(int, sys.stdin.readline().split(' ')))
              for i in range(N)]
TOTAL_TOMATOES = M*N
RIPEN_TOMATOES = deque()

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(N):
    for j in range(M):
        if TOMATO_BOX[i][j] == 1:
            RIPEN_TOMATOES.append([i, j])


if len(RIPEN_TOMATOES) == TOTAL_TOMATOES:
    print(0)
    exit()

while RIPEN_TOMATOES:
    tn, tm = RIPEN_TOMATOES.popleft()
    for i in range(4):
        x, y = tn+dx[i], tm+dy[i]
        if 0 <= x < N and 0 <= y < M and TOMATO_BOX[x][y] == 0:
            TOMATO_BOX[x][y] += TOMATO_BOX[tn][tm]+1
            RIPEN_TOMATOES.append([x, y])

max_num = 0
for i in range(N):
    for j in range(M):
        if TOMATO_BOX[i][j] == 0:
            print(-1)
            exit()
        max_num = max(max_num, TOMATO_BOX[i][j])
print(max_num-1)

