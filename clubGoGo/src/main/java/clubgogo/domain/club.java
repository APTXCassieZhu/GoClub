package clubgogo.domain;
import javax.persistence.*;

@Entity
@Table(name = "account")
public class Club {

    @Id
    private String clubname;
    private String logopath;
    private Integer security_question;
    private String security_answer;
    private String description;
    private String email;
    // private String event_location;
    // private String event_time;
    // private String event_name;

    public Club(){

    }

    public Club(String clubname, String logopath, Integer security_question, String security_answer, String description, String email) {
        this.clubname = clubname;
        this.logopath = logopath;
        this.security_question = security_question;
        this.security_answer = security_answer;
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

    public Integer getSecurity_question() {
        return security_question;
    }

    public void setSecurity_question(Integer security_question) {
        this.security_question = security_question;
    }

    public String getSecurity_answer() {
        return security_answer;
    }

    public void setSecurity_answer(String security_answer) {
        this.security_answer = security_answer;
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
                ", security_question='" + security_question + '\'' +
                ", security_answer='" + security_answer + '\'' +
                ", description='" + description + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

}