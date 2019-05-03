package clubgogo.domain;
// import javax.persistence.*;
//@Entity
//@Table(name = "Event")
public class Event {

    // @Id
    // private String clubname;
    private String event_location;
    private String event_name;
    private String event_time;

    public Event(){
    }

    public Event(String event_location, String event_name, String event_time){
        this.event_location = event_location;
        this.event_name = event_name;
        this.event_time = event_time;
    }

    public String getEvent_location() {
        return event_location;
    }

    public void setEvent_location(String event_location) {
        this.event_location = event_location;
    }

    public String getEvent_time() {
        return event_time;
    }

    public void setEvent_time(String event_time) {
        this.event_time = event_time;
    }

    public String getEvent_name() {
        return event_name;
    }

    public void setEvent_name(String event_name) {
        this.event_name = event_name;
    }

    public String toString(){
        return "event{" +
                " event_location='" + event_location + '\'' +
                ", event_time='" + event_time + '\'' +
                ", event_name='" + event_name + '\'' +
                '}';
    }
}