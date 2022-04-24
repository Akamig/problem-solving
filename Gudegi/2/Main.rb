n = gets
b = String.new("011011100101110111100010011010")
i = 1 if n == 0
i = 2 if n == 1
i = 4 if n == 2
i = 6 if n == 3
i = 9 if n == 4
i = 12 if n == 5
i = 15 if n == 6
i = 18 if n == 7
i = 22 if n == 8
i = 26 if n == 9
i = 30 if n == 10
puts b[0..i]
