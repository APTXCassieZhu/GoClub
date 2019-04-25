package clubgogo.controller;


import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

import java.util.Date;
import java.util.ArrayList;
import java.util.Collections;

@Controller
@RequestMapping(value="/profile.html")
public class profileController{

    // private LikesService likesService;
    // @Autowired
    // public void setLikesService(LikesService likesService) {
    //     this.likesService = likesService;
    // }

    // 0 = ok, 1 = password not match
    @RequestMapping(value="/change_password",method = RequestMethod.POST)
    @ResponseBody
    public int change_password(HttpServletRequest request){
        String username = request.getParameter("username");
        String oldp = request.getParameter("oldpassword");
        String newp = request.getParameter("newpassword");
        System.out.println(username + "\t" + oldp + "\t" + newp);
        return 0;
    }

}
