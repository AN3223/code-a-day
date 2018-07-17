import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
        
        Person p1 = (Person) context.getBean("John");
        Person p2 = (Person) context.getBean("Jennifer");
        
        p1.sayGreet(p2);
        p1.sayNiceToMeetYou(p2);
        p2.sayWhatIsYourAge(p1);
        p1.sayWhatIsYourAge(p2);
        
        context.registerShutdownHook();
        context.close();
    }
}
