import java.util.*;

public class Main {
    private static int x;
    private static int[] dp;

    public static void main(String[] args) {
        input();
        solution();
        System.out.println(dp[x]);
    }

    private static void input() {
        Scanner sc = new Scanner(System.in);
        x = sc.nextInt();
        dp = new int[x + 1];
    }

    private static void solution() {
        for (int i = 2; i <= x; i++) {
            dp[i] = dp[i - 1] + 1;
            if (i % 3 == 0) {
                dp[i] = Math.min(dp[i], dp[i / 3] + 1);
            }
            if (i % 2 == 0) {
                dp[i] = Math.min(dp[i], dp[i / 2] + 1);
            }
            System.out.println(i);
            System.out.println(dp[i]);
        }
    }
}