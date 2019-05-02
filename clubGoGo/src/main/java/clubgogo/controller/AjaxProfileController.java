package clubgogo.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller  
@RequestMapping(value="/profile.html")
public class AjaxProfileController {

    @RequestMapping(value="/change_password", method = RequestMethod.POST)
    @ResponseBody
    public int change_password(HttpServletRequest request){
        String username = request.getParameter("username");
        String oldp = request.getParameter("oldpassword");
        String newp = request.getParameter("newpassword");
        System.out.println(username + "\t" + oldp + "\t" + newp);
        if(!oldp.equals("abcde12345")){
            return 1;
        }
        return 0;
    }

    @RequestMapping(value="/favorite",method = RequestMethod.POST)
    @ResponseBody
    public String favorite(HttpServletRequest request){
        String username = request.getParameter("username");
        String sortMethod = request.getParameter("sorted");
        String pagenum1 = request.getParameter("page");
        int pagenum = Integer.parseInt(pagenum1);
        System.out.println(username + "\t" + sortMethod + "\t" + pagenum);
        return "";
    }
}