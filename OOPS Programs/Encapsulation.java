
import java.util.*;
class Main {
    private int id;
    private String name;
    

    public void setId(int id)
    {
        this.id=id;
    }
    public void setName(String name)
    {
        this.name = name;
    }
    public int getId()
    {
        return id;
    }
    public String getName()
    {
        return name;
    }   
}
public class Encapsulation
{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Main m = new Main();
        int id = sc.nextInt();
        String name = sc.nextLine();
        // Using setters
        m.setId(id);
        m.setName(name);

        // Using getters
        System.out.println("Employee ID: " + m.getId());
        System.out.println("Employee Name: " + m.getName());

        
    }
}
