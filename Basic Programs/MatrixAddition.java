import java.util.*;
public class MatrixAddition
{
	public static void main(String[] args) {
	    Scanner sc = new Scanner(System.in);
	    System.out.println("Enter the number of rows: ");
	    int r = sc.nextInt();
	    System.out.println("Enter the number of columns: ");
	    int c = sc.nextInt();
	    
	    int[][] a = new int[r][c];
	    int[][] b = new int[r][c];
	    int[][] sum = new int[r][c];
	    System.out.println("Enter the elements for first matrix: ");
	    for(int i=0; i<r; i++)
	    {
	        for(int j=0; j<c; j++)
	        {
	            a[i][j] = sc.nextInt();
	        }
	    }
	    System.out.println("Enter the elements for scond matrix: ");
	    for(int i=0; i<r; i++)
	    {
	        for(int j=0; j<c; j++)
	        {
	            b[i][j] = sc.nextInt();
	        }
	    }
	    System.out.println("Sum of the matrices: ");
	    for(int i=0; i<r; i++)
	    {
	        for(int j=0; j<c; j++)
	        {
	            sum[i][j] = a[i][j] + b[i][j];
	        }
	    }
	    for(int i=0; i<r; i++)
	    {
	        for(int j=0; j<c; j++)
	        {
	            System.out.print(sum[i][j] + " ");
	        }
	    }
		System.out.println();
	}
}
