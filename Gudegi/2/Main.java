import java.util.*;

public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int i = 0;
        String c = "011011100101110111100010011010";

        if (n == 0) {
            i = 1;
        }
        if (n == 1) {
            i = 2;
        }
        if (n == 2) {
            i = 4;
        }
        if (n == 3) {
            i = 6;
        }
        if (n == 4) {
            i = 9;
        }
        if (n == 5) {
            i = 12;
        }
        if (n == 6) {
            i = 15;
        }
        if (n == 7) {
            i = 18;
        }
        if (n == 8) {
            i = 22;
        }
        if (n == 9) {
            i = 26;
        }
        if (n == 10) {
            i = 30;
        }
        System.out.println(c.substring(0, i));
    }
}

/*
n = int(input())
a = str("11011100101110111100010011010").zfill(0)

if n == 0:
    i = 1
if n == 1:
    i = 2
if n == 2:
    i = 4
if n == 3:
    i = 6
if n == 4:
    i = 9
if n == 5:
    i = 12
if n == 6:
    i = 15
if n == 7:
    i = 18
if n == 8:
    i = 22
if n == 9:
    i = 26
if n == 10:
    i = 30
print(a[:i])



n = gets
b = String.new("011011100101110111100010011010")
if n == 0
    i = 1
if n == 1
    i = 2
if n == 2
    i = 4
if n == 3
    i = 6
if n == 4
    i = 9
if n == 5
    i = 12
if n == 6
    i = 15
if n == 7
    i = 18
if n == 8
    i = 22
if n == 9
    i = 26
if n == 10
    i = 30
puts b[0...i]
end
