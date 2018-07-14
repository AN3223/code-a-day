package core;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        ApplicationContext context = new FileSystemXmlApplicationContext("/src/main/java/core/beans/beans.xml");
        
        Person p1 = (Person) context.getBean("John");
        Person p2 = (Person) context.getBean("Jennifer");
        
        p1.greet(p2);
        p1.niceToMeetYou(p2);
        p2.whatIsYourAge(p1);
        p1.whatIsYourAge(p2);
    }
}
