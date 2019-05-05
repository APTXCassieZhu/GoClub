package clubgogo.domain;
import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "Favorite")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long favorite_id;
    private String username;
    private String clubname;
    private Date follow_time;

    

    public Favorite(){

    }

    public Favorite(String username, String clubname){
        this.username = username;
        this.clubname = clubname;
        this.follow_time = new Date();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getClubname() {
        return clubname;
    }

    public void setClubname(String clubname) {
        this.clubname = clubname;
    }

    public Date getFollow_time() {
        return follow_time;
    }

    public void setFollow_time(Date follow_time) {
        this.follow_time = follow_time;
    }

    public String toString(){
        return "Club{" +
                " username='" + username + '\'' +
                ", clubname='" + clubname + '\'' +
                ", follow_time='" + follow_time + '\'' +
                '}';
    }

    public int compareTo(Favorite f){
        return this.getFollow_time().compareTo(f.getFollow_time());
    }
}