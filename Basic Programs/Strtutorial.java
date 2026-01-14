
import java.util.*;
public class Strtutorial {
    public static void main(String[] args) {
        String s = "Hello";
        String s1 = "World";
        String s2 = new String("Hello World");

        System.out.println(s2);
        System.out.println("value of s2 is: " + s2 + " with the hash code : " + s2.hashCode());
        System.out.println("length of string is : " + s2.length());
        String concat = s + " " + s1;
        System.out.println(concat);
        for(int i=0; i<s2.length(); i++)
        {
            s2.charAt(i);
        }
        
        // count the number of vowels in a string 
        Scanner sc = new Scanner(System.in);
        String value = sc.nextLine();
        value = value.toLowerCase();
        int count = 0;
        for(int i=0; i<value.length(); i++)
        {
            char ch = value.charAt(i);
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
            {
                count++;
            }
        }
        System.out.println("Number of vowels: " + count);

        //count using contains 
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine();
        int cou = 0;
        String vowels = "aeiou";
        for(int i=0; i<str.length(); i++)
        {
            char cha = str.charAt(i);
            if(vowels.contains(String.valueOf(cha)))
            {
                cou++;
            }
        }
        System.out.println("Number of vowels:" + cou);

        //Split and count the string
        String word = "Here is my java program";
        String[] w = word.split(" ");
        int counter = w.length;
        System.out.println(counter);
    
        //converting character to string
        char[] chars = s1.toCharArray();
        System.out.println("Characters in 'Java':");
        for (char c : chars) {
            System.out.println(c);
        }

        //hashcode 
        long start, end;
        start = System.currentTimeMillis();
        String build = " ";
        for(int i=0; i<500; i++)
        {
            build += "somvevalue";
            System.out.println(System.identityHashCode(build));
        }
        end = System.currentTimeMillis();
        System.err.println("Total time taken using normal string: " + (end-start));

         //StringBuilder
         StringBuilder sb = new StringBuilder("Hello");
         sb.append("Java");
         System.out.println(sb);
         sb.insert(5, " World");
         System.out.println(sb);
         sb.delete(0, 5);
         sb.replace(0, 4, "Hi");
         sb.reverse();
         String conv = sb.toString(); //convert to normal string

         //StingBuffer
          StringBuffer string = new StringBuffer("Hello");
          string.append(" World!");
          System.out.println(str);

    }
    
}
