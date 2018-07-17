import java.util.Random;

public class Person {
    String name;
    String speaking; // Indicates who is speaking
    private int age;
    private Random rng = new Random();
    
    Person(String name) {
        this.name = name;
        this.speaking = name + ": ";
    }
    
    public void setAge(int age) {
        this.age = age;
    }
 
    public void born() {
        System.out.println(name + " has been born.");
    }
    
    public void died() {
        System.out.println(name + " has died.");
    }
    
    public void sayGreet(Person person) {
        System.out.println(speaking + "Hello, my name is " + this.name + ".");
        person.sayGreetBack(this);
    }
    
    protected void sayGreetBack(Person person) {
        System.out.println(speaking + "Hello " + person.name + ", my name is " + this.name + "!");
    }
    
    public void sayNiceToMeetYou(Person person) {
        System.out.println(speaking + "Nice to meet you " + person.name + ".");
    }
    
    public void sayWhatIsYourAge(Person person) {
        System.out.println(speaking + "How old are you " + person.name + "?");
        person.sayMyAgeIs();
    }
    
    public void sayMyAgeIs() {
        if (this.age < 30)
            System.out.println(speaking + "I'm " + this.age + ".");
        else {
            int randnum = rng.nextInt(30);
            if (randnum > 19 && randnum < 30) {
                System.out.println(speaking + "I'm " + randnum + ".");
            } else {
                System.out.println(speaking + "I'd rather not say.");
            }
        }
    }
}


