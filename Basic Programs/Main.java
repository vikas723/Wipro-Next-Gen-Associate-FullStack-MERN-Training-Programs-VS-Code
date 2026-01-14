class Constructor
{
    String name;
    int rollno; 
    int marks;

    Constructor()
    {


    }

    Constructor(String n, int r, int m)
    {
        name = n;
        rollno = r;
        marks = m;
    }
    Constructor(Constructor c)
    {
        name = c.name;
        rollno = c.rollno;
        marks = c.marks;
    }
    void display()
    {
       
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollno);
        System.out.println("Marks: " + marks);
        System.out.println("------------------");
    }
    

}
public class Main {
    public static void main(String[] args) {
        Constructor c1 = new Constructor();
        c1.display();

        Constructor c2 = new Constructor("Vihan", 1, 99);
        c2.display();

        Constructor c3 = new Constructor(c2);
        c3.display();
    }

    
}
