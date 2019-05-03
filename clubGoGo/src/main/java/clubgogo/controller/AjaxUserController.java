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
        // check if user exists
        Optional<Clubuser> currentUser = userRepository.findByUsername(user.getUsername());
        if(!currentUser.isPresent()){
            // save the user to db
            userRepository.save(user);
            return user;
        }else{
            return null;
        }    
    }

    @RequestMapping(value="/login", method = RequestMethod.POST)
    @ResponseBody
    public Clubuser login(HttpServletRequest request, HttpSession session) {
        Clubuser user = new Clubuser(request.getParameter("username"),request.getParameter("password"));
        Optional<Clubuser> currentUser = userRepository.findByUsername(user.getUsername());
        // check whether the user exists
        if(!currentUser.isPresent()){
            System.out.println("User doesn't exist.");
            return null;
        } else {
            // check password
            if(!currentUser.get().getPassword().equals(user.getPassword())){
                System.out.println("Password is incorrect");
                return null;
            } else{
                System.out.println("login success");
                return currentUser.get();
            }        
        }
    }

    @RequestMapping(value="/email", method = RequestMethod.POST)
    @ResponseBody
    public String sendEmail(HttpServletRequest request, HttpSession session) {
        return "\nDear "+request.getParameter("name")+
        ", your email has been sent to the "+request.getParameter("club")+"\'s manager." ;
    }
}