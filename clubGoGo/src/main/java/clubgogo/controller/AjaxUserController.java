package clubgogo.controller;

import clubgogo.domain.Clubuser;
import clubgogo.repository.ClubuserRepository;
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
    ClubuserRepository userRepository;

    @RequestMapping(value="/register", method = RequestMethod.POST)
    @ResponseBody
    public Clubuser createUser(HttpServletRequest request){
        System.out.println(request.toString());
        Clubuser user = new Clubuser(request.getParameter("username"),request.getParameter("password"));
        // save the user to db
        userRepository.save(user);
        System.out.println(user.getUsername());
        return user;
    }
    @RequestMapping(value="/login", method = RequestMethod.POST)
    @ResponseBody
    public Clubuser login(HttpServletRequest request, HttpSession session) {
        Clubuser user = new Clubuser(request.getParameter("username"),request.getParameter("password"));
        Optional<Clubuser> currentUser = userRepository.findByUsername(user.getUsername());
        // check whether the user exists
        if(currentUser.isPresent()){
            return null;
        } else {
            return currentUser.get();
        }
    }
}