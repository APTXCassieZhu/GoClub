package clubgogo.domain;
import javax.persistence.*;

@Entity
@Table(name = "Club")
public class Club {

    @Id
    private String clubname;
    private String logopath;
    private String description;
    private String email;
    private String event_location;
    private String event_time;
    private String event_name;
    private String contact;
    private String category;

    public Club(){

    }

    public Club(String clubname, String logopath, String description, String contact,
    String email, String event_location, String event_time, String event_name, String category) {
        this.clubname = clubname;
        this.logopath = logopath;
        this.description = description;
        this.email = email;
        this.event_location = event_location;
        this.event_location = event_time;
        this.event_location = event_name;  
        this.contact = contact;  
        this.category = category;
    }

    public String getClubname() {
        return clubname;
    }

    public void setClubname(String clubname) {
        this.clubname = clubname;
    }

    public String getLogopath() {
        return logopath;
    }

    public void setLogopath(String logopath) {
        this.logopath = logopath;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEvent_location() {
        return event_location;
    }

    public void setEvent_location(String event_location) {
        this.event_location = event_location;
    }

    public String getEvent_name() {
        return event_name;
    }

    public void setEvent_name(String event_name) {
        this.event_name = event_name;
    }

    public String getEvent_time() {
        return event_time;
    }

    public void setEvent_time(String event_time) {
        this.event_time = event_time;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Club{" +
                " clubname='" + clubname + '\'' +
                ", category='" + category + '\'' +
                ", logopath='" + logopath + '\'' +
                ", description='" + description + '\'' +
                ", email='" + email + '\'' +
                ", contact='" + contact + '\'' +
                ", event_location='" + event_location + '\'' +
                ", event_name='" + event_name + '\'' +
                ", event_time='" + event_time + '\'' +
                '}';
    }

}