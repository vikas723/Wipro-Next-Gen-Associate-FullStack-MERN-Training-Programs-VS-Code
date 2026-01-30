class First
{
    static String comp = "Wipro";
}
public class SecondProgram

{
    String name = "Java";
    int id = 4;
    static String company = "Wipro"; //declaring static keyword for static variable
    public static void main(String args[])
    {
        SecondProgram s = new SecondProgram();
        System.out.println(s.name); /* calling non-static variable*/
        System.out.println(s.id);
        System.out.println(SecondProgram.company); // Calling static variable
        System.out.println(First.comp); // Calling from another class 
    }
}