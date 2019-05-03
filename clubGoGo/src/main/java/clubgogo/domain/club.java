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
    // private String event_location;
    // private String event_time;
    // private String event_name;

    public Club(){

    }

    public Club(String clubname, String logopath,String description, String email) {
        this.clubname = clubname;
        this.logopath = logopath;
        this.description = description;
        this.email = email;
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

    @Override
    public String toString() {
        return "club{" +
                " clubname='" + clubname + '\'' +
                ", logopath='" + logopath + '\'' +
                ", description='" + description + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

}