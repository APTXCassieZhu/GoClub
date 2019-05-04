package clubgogo.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import clubgogo.domain.Club;
import clubgogo.domain.Favorite;
import clubgogo.repository.ClubRepository;
import clubgogo.repository.FavoriteRepository;

@Controller  
@RequestMapping(value="/club.html")
public class AjaxClubController {

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

    @RequestMapping(value="/check_fav",method = RequestMethod.POST)
    @ResponseBody
    public String check_fav(HttpServletRequest request){
        String username = request.getParameter("username");
        String club = request.getParameter("club");
        System.out.println(username + "\t" + club);
        List<Favorite> favorites = (List<Favorite>)favoriteRepository.findAll();
        for(Favorite f : favorites){
            if(f.getClubname().equals(club)&&f.getUsername().equals(username)){
                return "fav";
            }
        }
        return "unfav";
    }

    @RequestMapping(value="/show",method = RequestMethod.POST)
    @ResponseBody
    public String show(HttpServletRequest request){
        String club = request.getParameter("club");
        List<Club> clubs = (List<Club>)clubRepository.findAll();
        String clubname = null;
        String path = null;
        String description = null;
        String contact = null;
        String event = null;
        for(Club c : clubs){
            if(c.getClubname().equals(club)){
                clubname = c.getClubname();
                path = c.getLogopath().toLowerCase().contains("http")?c.getLogopath():"../img/club.png";
                description = c.getDescription();
                contact = c.getEmail().toLowerCase().contains("@")?c.getEmail():null;
                event = c.getEvent_location().toLowerCase().equals("na")?null:c.getEvent_location() + ", " + c.getEvent_time() + ", " + c.getEvent_name();
            }
        }
        JSONObject result = new JSONObject();
        result.put("clubname", clubname);
        result.put("path", path);
        result.put("des", description);
        result.put("contact", contact);
        result.put("event", event);
        System.out.println(result.toString());
        return result.toString();
        // return club logo path, name, description, contact, event
    }

    @RequestMapping(value="/unfav",method = RequestMethod.POST)
    @ResponseBody
    public void unfav(HttpServletRequest request){
        String username = request.getParameter("username");
        String club = request.getParameter("club");
        System.out.println(username + "\t" + club);
        List<Favorite> favorites = (List<Favorite>)favoriteRepository.findAll();
        for(Favorite f : favorites){
            if(f.getClubname().equals(club)&&f.getUsername().equals(username)){
                favoriteRepository.delete(f);
            }
        }
        // delete fav from db
    }

    @RequestMapping(value="/fav",method = RequestMethod.POST)
    @ResponseBody
    public void fav(HttpServletRequest request){
        String username = request.getParameter("username");
        String club = request.getParameter("club");
        System.out.println(username + "\t" + club);
        Favorite newFavorite = new Favorite(username,club);
        favoriteRepository.save(newFavorite);
        // add fav to db
    }
}