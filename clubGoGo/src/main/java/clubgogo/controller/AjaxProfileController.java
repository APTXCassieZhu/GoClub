package clubgogo.controller;

import clubgogo.domain.Clubuser;
import clubgogo.repository.ClubuserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Optional;
import javax.servlet.http.HttpServletRequest;

@Controller  
@RequestMapping(value="/profile.html")
public class AjaxProfileController {

    private ClubuserRepository userRepository;
    @Autowired
    public void setClubuserRepository(ClubuserRepository userRepository){
        this.userRepository = userRepository;
    }

    @RequestMapping(value="/change_password", method = RequestMethod.POST)
    @ResponseBody
    public int change_password(HttpServletRequest request){
        String oldp = request.getParameter("oldpassword");
        String newp = request.getParameter("newpassword");
        String username = request.getParameter("username");
        System.out.println(username + "\t" + oldp + "\t" + newp);
        Optional<Clubuser> findUser = userRepository.findByUsername(username);
        // verify user
        if(findUser.isPresent()) {
            if(!oldp.equals(findUser.get().getPassword())){
                return 1;
            } else {
                // update new password in db
                findUser.get().setPassword(newp);
                userRepository.save(findUser.get());
                return 0;
            }
        }
        return 1;
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