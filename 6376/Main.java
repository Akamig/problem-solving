import java.util.*;

public class Main
{
	public static double factorial(int n) {
		if(n==0) return 1;
		else if(n==1) return n;
		else {
			return n*factorial(n-1);
		}
	}
	
	public static void main(String[] args)
    {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("n e");
		System.out.println("- -----------");
		for(int i=0;i<=9;i++) {
			double under = 0;
			for(int j=0;j<=i;j++) {
				under += 1.0/factorial(j);
			}
			if(under - (int)under == 0) System.out.println(i + " " + (int)under);
			else System.out.println(i + " " + Math.round(under*1000000000)/1000000000.0);		
			}
    }
