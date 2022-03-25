from collections import deque
target = int(input())
C = [1] * (target+1)
if target == 1:
    print('0')
    exit()
elif target == 2:
    print('1')
    exit()
for i in range(2, target+1):
    C[i] = C[i-1] + 1
    if i % 3 == 0:
        C[i] = min(C[i], C[i//3] + 1)
    if i % 2 == 0:
        C[i] = min(C[i], C[i//2] + 1)

print(C[target]-1);
