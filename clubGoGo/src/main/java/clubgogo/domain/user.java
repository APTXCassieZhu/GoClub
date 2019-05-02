package clubgogo.domain;
import javax.persistence.*;

@Entity
@Table(name = "account")
public class User {

    @Id
    private String username;
    private String password;
    private Integer security_question;
    private String security_answer;

    public User(){

    }

    public User(String username, String password, Integer security_question, String security_answer) {
        this.username = username;
        this.password = password;
        this.security_question = security_question;
        this.security_answer = security_answer;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    @Override
    public String toString() {
        return "User{" +
                " username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", security_question='" + security_question + '\'' +
                ", security_answer='" + security_answer + '\'' +
                '}';
    }

}