package core;

import java.util.Random;

public class Person {
    String name;
    String speaking; // Indicates who is speaking
    private int age;
    private Random rng = new Random();
    
    private static void think() {
        try {
            Thread.sleep(1800);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    
    public void setAge(int age) {
        this.age = age;
    }
    
    Person(String name) {
        this.name = name;
        this.speaking = name + ": ";
    }
 
    public void born() {
        System.out.println(name + " has been born.");
    }
    
    public void died() {
        System.out.println(name + " has died.");
    }
    
    public void greet(Person person) {
        think();
        System.out.println(speaking + "Hello, my name is " + this.name + ".");
        person.greetBack(this);
    }
    
    protected void greetBack(Person person) {
        think();
        System.out.println(speaking + "Hello " + person.name + ", my name is " + this.name + "!");
    }
    
    public void niceToMeetYou(Person person) {
        think();
        System.out.println(speaking + "Nice to meet you " + person.name + ".");
    }
    
    public void whatIsYourAge(Person person) {
        think();
        System.out.println(speaking + "How old are you " + person.name + "?");
        person.myAgeIs();
    }
    
    public void myAgeIs() {
        think();
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
