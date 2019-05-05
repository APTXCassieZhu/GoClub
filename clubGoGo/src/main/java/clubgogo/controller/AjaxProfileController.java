package clubgogo.controller;

import clubgogo.domain.Club;
import clubgogo.domain.Clubuser;
import clubgogo.domain.Favorite;
import clubgogo.repository.ClubRepository;
import clubgogo.repository.ClubuserRepository;
import clubgogo.repository.FavoriteRepository;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
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

    private FavoriteRepository favoriteRepository;
    @Autowired
    public void setFavoriteRepository(FavoriteRepository favoriteRepository){
        this.favoriteRepository = favoriteRepository;
    }

    private ClubRepository clubRepository;
    @Autowired
    public void setClubRepository(ClubRepository clubRepository){
        this.clubRepository = clubRepository;
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
        List<String> clubname = new ArrayList<>();
        List<String> event = new ArrayList<>();
        List<String> email = new ArrayList<>();
        List<Favorite> favorites = (List<Favorite>)favoriteRepository.findAll();
        if(sortMethod.equals("sortby")){
            for(Favorite f :favorites){
                if(f.getUsername().equals(username)){
                    clubname.add(f.getClubname());
                }
            }
        }else if(sortMethod.equals("name")){
            for(Favorite f :favorites){
                if(f.getUsername().equals(username)){
                    clubname.add(f.getClubname());
                }
            }
            Collections.sort(clubname);
        }else if(sortMethod.equals("latest")){
            Collections.sort(favorites, Collections.reverseOrder());
            for(Favorite f :favorites){
                if(f.getUsername().equals(username)){
                    clubname.add(f.getClubname());
                }
            }
        }
        List<Club> clubs = (List<Club>)clubRepository.findAll();
        for(Club c : clubs){
            for(String s : clubname){
                if(s.equals(c.getClubname())){
                    email.add(c.getEmail().toLowerCase().contains("@")?c.getEmail():null);
                    event.add(c.getEvent_location().toLowerCase().equals("na")?null:c.getEvent_location() + ", " + c.getEvent_time() + ", " + c.getEvent_name());
                }
            }
        }
        int count = clubname.size();
        if(pagenum*10>count){
            clubname = clubname.subList((pagenum-1)*10, count);
            event = event.subList((pagenum-1)*10, count);
            email = email.subList((pagenum-1)*10, count);
        }else{
            clubname = clubname.subList((pagenum-1)*10, pagenum*10);
            event = event.subList((pagenum-1)*10, pagenum*10);
            email = email.subList((pagenum-1)*10, pagenum*10);
        }
        JSONObject result = new JSONObject();
        result.put("clubname", clubname);
        result.put("event", event);
        result.put("email", email);
        result.put("start", (pagenum-1)*10+1);
        result.put("totalpage", Math.ceil(count/15.0));
        result.put("pagenumber", pagenum);
        System.out.println(result.toString());
        return result.toString();
    }
}