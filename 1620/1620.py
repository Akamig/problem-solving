import sys
N, M = map(int, sys.stdin.readline().split())
id = {}
names = {}
for i in range(1, N+1):
    name = sys.stdin.readline().rstrip()
    id[i] = name
    names[name] = i

for i in range(M):
    x = sys.stdin.readline().rstrip()
    if x.isdigit():
        print(id[int(x)])
    else:
        print(names[x])
