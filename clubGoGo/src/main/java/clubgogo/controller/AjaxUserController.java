package clubgogo.controller;

import clubgogo.domain.User;
import clubgogo.repository.UserRepository;
import org.springframework.stereotype.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import java.util.Optional;


@Controller  
@RequestMapping(value="/user")
public class AjaxUserController {
    @Autowired
    UserRepository userRepository;

    @RequestMapping(value="/register", method = RequestMethod.POST)
    @ResponseBody
    public User createUser(HttpServletRequest request){
        System.out.println(request.toString());
        User user = new User(request.getParameter("username"),request.getParameter("password"));
        // save the user to db
        userRepository.save(user);
        System.out.println(user.getUsername());
        return user;
    }
    @RequestMapping(value="/login", method = RequestMethod.POST)
    @ResponseBody
    public User login(HttpServletRequest request, HttpSession session) {
        User user = new User(request.getParameter("username"),request.getParameter("password"));
        Optional<User> currentUser = userRepository.findByUsername(user.getUsername());
        // check whether the user exists
        if(currentUser.isPresent()){
            return null;
        } else {
            return currentUser.get();
        }
    }
}