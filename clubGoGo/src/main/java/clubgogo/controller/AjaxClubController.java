package clubgogo.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller  
@RequestMapping(value="/club.html")
public class AjaxClubController {

    @RequestMapping(value="/check_fav",method = RequestMethod.POST)
    @ResponseBody
    public String check_fav(HttpServletRequest request){
        String username = request.getParameter("username");
        String club = request.getParameter("club");
        System.out.println(username + "\t" + club);
        return "fav";
        // return fav or unfav
    }

    @RequestMapping(value="/show",method = RequestMethod.POST)
    @ResponseBody
    public String show(HttpServletRequest request){
        String club = request.getParameter("club");
        System.out.println("club:\t" + club);
        return "";
        // return club logo path, name, description, contact, event
    }

    @RequestMapping(value="/unfav",method = RequestMethod.POST)
    @ResponseBody
    public void unfav(HttpServletRequest request){
        String username = request.getParameter("username");
        String club = request.getParameter("club");
        System.out.println(username + "\t" + club);
        // delete fav from db
    }

    @RequestMapping(value="/fav",method = RequestMethod.POST)
    @ResponseBody
    public void fav(HttpServletRequest request){
        String username = request.getParameter("username");
        String club = request.getParameter("club");
        System.out.println(username + "\t" + club);
        // add fav to db
    }
}