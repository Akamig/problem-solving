import sys
testcases = sys.stdin.readline()
i = 1
while :
    a = set()
    for i in reversed(range(n)):
        a.append(sys.stdin.readline())
    print(len(a))
    a.clear()
