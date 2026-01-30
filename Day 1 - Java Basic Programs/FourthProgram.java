import java.util.*;

public class FourthProgram {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number of elements: ");
        int n = sc.nextInt();

        int[] arr = new int[n];

        System.out.println("Enter the Array elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();   
        }

        System.out.println("The array elements are:");
        for (int i = 0; i < n; i++) {
            System.out.println("arr[" + i + "] = " + arr[i]);
        }

        int sum = 0;
        int[] subjectMarks = { 45, 67, 45, 67, 45 };
        // for (int i = 0; i < subjectMarks.length; i++)
        for (int j : subjectMarks) {
            System.out.println("The marks are given below :" + j);
        }
        for (int i = 10; i > 0; i--) {
            sum = sum + i;
            System.out.println("The no is printed as :" + i);
        }
        System.out.println("The total sum value is :" + sum);
    }
}
