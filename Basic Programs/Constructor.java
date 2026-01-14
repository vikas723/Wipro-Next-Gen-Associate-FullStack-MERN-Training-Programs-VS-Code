import java.util.Scanner;

class Student {

    String name;
    int id;
    int marks;

    // Parameterized Constructor
     Student(String name, int id, int marks) {
        this.name = name;
        this.id = id;
        this.marks = marks;
    }


    public Student(int id2, String name2, int[] marks2) {
        //TODO Auto-generated constructor stub
    }


    // Method to display details
    void display() {
        System.out.println("\nStudent Details");
        System.out.println("Name  : " + name);
        System.out.println("ID    : " + id);
        System.out.println("Marks : " + marks);
    }
}

public class Constructor {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Student Name: ");
        String name = sc.nextLine();

        System.out.print("Enter Student ID: ");
        int id = sc.nextInt();

        System.out.print("Enter Student Marks: ");
        int marks = sc.nextInt();

        // Creating object using constructor
        Student s = new Student(name, id, marks);

        // Printing student details
        s.display();
    }
}

