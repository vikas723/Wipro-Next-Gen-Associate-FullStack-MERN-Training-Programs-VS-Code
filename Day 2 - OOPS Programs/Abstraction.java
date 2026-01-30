abstract class Animal
{
    abstract void cat();
    abstract void dog();

    void duck() // In default it is public
    {
        System.out.println("Quack");
    }

}
class Sound extends Animal {
    @Override
    void cat()
    {
        System.out.println("Meow");
    }
    @Override
    void dog()
    {
        System.out.println("Bark");
    }
}

abstract class Incentive
{
    abstract void diwaliBonus(); //Diwali bonus is common for all

}
class Manager extends Incentive
{
    void diwaliBonus(){
        // logic
    }

}
class SoftwareEngineer extends Incentive{
    void diwaliBonus()
    {
        //logic

    }
}
public class Abstraction{
    public static void main(String[] args) {
        Animal a = new Sound(); // we cannot create objects for abstract class only create objects for non-abstarct class
        Incentive i1 = new Manager();
        Incentive i2 = new SoftwareEngineer(); 
        
        a.duck();
        a.cat();
        a.dog();
        i1.diwaliBonus();
        i2.diwaliBonus();

    }
}
