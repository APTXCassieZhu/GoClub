package clubgogo.controller;

import clubgogo.domain.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;

@Controller  
@RequestMapping(value="/user")
public class AjaxUserController {

    @PostMapping(value = "/register", produces = "application/json")
    public User createUser(@RequestBody User user, HttpSession session) {
        // TO DO save the user to db
        //userRepository.save(user);
        return user;
    }

    @PostMapping(value = "/login", produces = "application/json")
    public User login(@RequestBody User user, HttpSession session) {
        
        return user;
    }
}