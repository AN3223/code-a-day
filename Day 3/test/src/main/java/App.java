import org.springframework.context.support.ClassPathXmlApplicationContext;
import library.CustomEventPublisher;

public class App {
    public static void main(String[] args) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
        // Context refreshes on initialization
        
        CustomEventPublisher cvp =  (CustomEventPublisher) context.getBean("customEventPublisher");
        
        cvp.publish();  // Custom event!
        context.start();  // Context started
        context.refresh();  // Context refreshed
        context.stop();  // Context stopped
        context.close(); // Context closed
    }
}
