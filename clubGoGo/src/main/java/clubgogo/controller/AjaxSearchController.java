package clubgogo.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller  
@RequestMapping(value="/search.html")
public class AjaxSearchController {

    @RequestMapping(value="/result", method = RequestMethod.POST)
    @ResponseBody
    public String result(HttpServletRequest request){
        String keyword = request.getParameter("keyword");
        String sortMethod = request.getParameter("sorted");
        String pagenum1 = request.getParameter("page");
        int pagenum = Integer.parseInt(pagenum1);
        System.out.println(keyword + "\t" + sortMethod + "\t" + pagenum);
        return "";
    }
}