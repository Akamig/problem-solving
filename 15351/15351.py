a=int(input())

for i in range(a):
    b = sum(map(lambda x: 0 if x==' ' else ord(x)-64, input()))
    b='PERFECT LIFE' if b == 100 else b
    print(b);
