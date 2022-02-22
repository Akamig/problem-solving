import java.util.*;
public class Main {
    public static void main(String[] args) {
        int x = -2147483648;
        if (x != 0 && x == -x) {
            System.out.println("true");
        } else {
            System.out.println("false");
        }
    }
}