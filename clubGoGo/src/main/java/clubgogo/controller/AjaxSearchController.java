package clubgogo.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import clubgogo.domain.Club;
import clubgogo.repository.ClubRepository;

@Controller  
@RequestMapping(value="/search.html")
public class AjaxSearchController {

    private ClubRepository clubRepository;
    @Autowired
    public void setClubRepository(ClubRepository clubRepository){
        this.clubRepository = clubRepository;
    }


    @RequestMapping(value="/result", method = RequestMethod.POST)
    @ResponseBody
    public String result(HttpServletRequest request){
        String keyword = request.getParameter("keyword").toLowerCase();
        String sortMethod = request.getParameter("sorted");
        String pagenum1 = request.getParameter("page");
        int pagenum = Integer.parseInt(pagenum1);
        System.out.println(keyword + ".\t." + sortMethod + ".\t." + pagenum);
        List<Club> clubs = (List<Club>)clubRepository.findAll();
        List<String> clubname = new ArrayList<>();
        List<String> path = new ArrayList<>();
        List<String> description = new ArrayList<>();
        if(sortMethod.equals(" ")||sortMethod==null){
            for(Club c : clubs){
                if(c.getClubname().toLowerCase().contains(keyword)){
                    System.out.println(c.getClubname());
                    clubname.add(c.getClubname());
                    path.add(c.getLogopath().toLowerCase().contains("http")?c.getLogopath():"../img/club.png");
                    description.add(c.getDescription());
                }
            }
        }else{
            for(Club c : clubs){
                if(c.getClubname().toLowerCase().contains(keyword)&&c.getCategory().contains(sortMethod)){
                    System.out.println(c.getClubname());
                    clubname.add(c.getClubname());
                    path.add(c.getLogopath().toLowerCase().contains("http")?c.getLogopath():"../img/club.png");
                    description.add(c.getDescription());
                }
            }
        }
        Integer count = clubname.size();
        if(pagenum*15>count){
            clubname = clubname.subList((pagenum-1)*15, count);
            path = path.subList((pagenum-1)*15, count);
            description = description.subList((pagenum-1)*15, count);
        }else{
            clubname = clubname.subList((pagenum-1)*15, pagenum*15);
            path = path.subList((pagenum-1)*15, pagenum*15);
            description = description.subList((pagenum-1)*15, pagenum*15);
        }
        JSONObject result = new JSONObject();
        result.put("clubname", clubname);
        result.put("path", path);
        result.put("des", description);
        result.put("totalpage", Math.ceil(count/15.0));
        result.put("pagenumber", pagenum);
        System.out.println(result.toString());
        return result.toString();
    }
}