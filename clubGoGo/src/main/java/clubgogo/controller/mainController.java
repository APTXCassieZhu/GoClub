package clubgogo.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class mainController {


    @RequestMapping(value={"/","home.html"})
    String home(){
        return "home";
    }

    @RequestMapping(value={"login.html"})
    String login(){
        return "login";
    }

    @RequestMapping(value={"register.html"})
    String register(){
        return "register";
    }

    @RequestMapping(value={"upperbar.html"})
    String upperbar(){
        return "upperbar";
    }

    @RequestMapping(value={"profile.html"})
    String profile(){
        return "profile";
    }

    @RequestMapping(value={"contact.html"})
    String contact(){
        return "contact";
    }

    @RequestMapping(value={"searchResult.html"})
    String searchResult(){
        return "searchResult";
    }

    @RequestMapping(value={"clubDetail.html"})
    String clubDetail(){
        return "clubDetail";
    }

    @RequestMapping(value={"about.html"})
    String about(){
        return "about";
    }
}