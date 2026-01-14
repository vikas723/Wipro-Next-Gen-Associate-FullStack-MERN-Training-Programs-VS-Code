public class Student {

    int id;
    String name;
    int[] marks;

    public Student()
    {

    }

    public Student(int id, String name, int[] marks)
    {
        this.id=id;
        this.name=name;
        this.marks = marks;
    }

    public void displayInfo()
    {
        System.out.println("Student Id: " + id);
        System.out.println("Student Name: " + name);
        System.out.println("Student Marks: " + marks);

        for(int m : marks)
        {
            System.out.println(m + " ");
        }
        System.out.println("/n");
    }
    
}



