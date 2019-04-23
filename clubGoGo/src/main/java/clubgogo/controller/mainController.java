package clubgogo.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class mainController {


    @RequestMapping(value={"/","home.html"})
    String home(){
        return "login";
    }

    @RequestMapping(value={"login.html"})
    String login(){
        return "login";
    }

    @RequestMapping(value={"register.html"})
    String register(){
        return "register";
    }

}