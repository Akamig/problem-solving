def solution(money, cost):
    n=len(cost)
    price = [1,5,10,50,100,500]
    minPrice = [[0 for i in range(money+1)] for j in range(n+1)]
    for i in range(money+1):
        minPrice[0][i] = 1000000 # Max Price
    for i in range(1, n+1):
        minPrice[i][0] = 0
    for i in range(1, n+1):
        for j in range(1, money+1):
            if (price[i-1] >= j+1):
                minPrice[i][j] = minPrice[i-1][j]
            else:
                minPrice[i][j] = min(minPrice[i-1][j],
                    minPrice[i][j-price[i-1]] + cost[i-1])
    return minPrice[n][money]
 
 
print(solution(4578, [1, 4, 99, 35, 50, 1000]))