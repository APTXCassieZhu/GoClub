package clubgogo.controller;

import clubgogo.domain.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller  
@RequestMapping(value="/user")
public class AjaxUserController {

    @RequestMapping(value="/register", method = RequestMethod.POST)
    @ResponseBody
    public User createUser(HttpServletRequest request){
        System.out.println(request.toString());
        User user = new User(request.getParameter("username"),request.getParameter("password"));
        // TO DO save the user to db
        //userRepository.save(user);
        System.out.println(user.getUsername());
        return user;
    }
    @RequestMapping(value="/login", method = RequestMethod.POST)
    @ResponseBody
    public User login(HttpServletRequest request, HttpSession session) {
        User user = new User(request.getParameter("username"),request.getParameter("password"));
        return user;
    }
}