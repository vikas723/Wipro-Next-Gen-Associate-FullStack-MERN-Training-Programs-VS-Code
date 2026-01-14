interface Bank
{
    void interestrate();
    
}
class Sbi implements Bank
{
    public void interestrate() // Not Public by default
    {
        System.out.println("The interest rate is 2.7%");
    }
}

interface Incentive
{
    void diwaliBonus();
}
class Manager implements Incentive
{
    public void diwaliBonus() // It is not public by default
    {
        //logic
    }
}
class SoftwareEngineer implements Incentive
{
    public void diwaliBonus() // It is not public by default
    {
        //logic
    }
}
public class Interface
{
	public static void main(String[] args) {
	    Sbi s = new Sbi();
        Manager m = new Manager();
        SoftwareEngineer se = new SoftwareEngineer();
	    s.interestrate();
        m.diwaliBonus();
	
	}
}
