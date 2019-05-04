function showResult(){
    $(window).ready(function() {
        resultPage(1);
    });
}



function resultPage(page){
    var word = $.cookie('search_word');
    document.getElementById("resultword").innerHTML = word;
    var selector = document.getElementById("category");
    var option = selector.options[selector.selectedIndex].value;
    console.log(option);
    var info;
    $.ajax({
        url: "search.html/result",
        type: "post",
        async: false,
        data: {keyword: $.cookie('search_word'), sorted: option, page: page},
        success: function (data) {
            info = jQuery.parseJSON(data);
        }
    });
    $("#resultTable tr").remove();
    if(info.clubname.length==0){
        document.getElementById("resultEmpty").style.display = "block";
        document.getElementById("divpage").style.display = "none";
    }else{
        document.getElementById("resultEmpty").style.display = "none";
        document.getElementById("divpage").style.display = "block";
        var tbody = document.getElementById("resultTable");
        for(let i=0; i<info.clubname.length; i++){
            var tr1 = document.createElement('tr');
            tbody.appendChild(tr1);
            var tdimg = document.createElement('td');
            tdimg.style.width = "13vw";
            var img = document.createElement('img');
            img.src = info.path[i];
            tdimg.appendChild(img);
            tr1.appendChild(tdimg);
            tr1.addEventListener('click', function() {
                goclubdetail(info.clubname[i]);
            });
            var tdinfo = document.createElement('td');
            var h1 = document.createElement('h1');
            h1.innerText = info.clubname[i];
            tdinfo.appendChild(h1);
            var span = document.createElement('span');
            span.appendChild(document.createTextNode(info.des[i]));
            tdinfo.appendChild(span);
            tr1.appendChild(tdinfo);
            tr1.style.cursor = "pointer";
            var tr2 = document.createElement('tr');
            var tdhr = document.createElement('td');
            tdhr.colSpan = "2";
            tdhr.appendChild(document.createElement('hr'));
            tr2.appendChild(tdhr);
            tbody.appendChild(tr2);
        }

        $("#searchpageturn li").remove();
        var pageturntable = document.getElementById("searchpageturn");
        for(let k=1; k<=info.totalpage; k++){
            if(k==1){
                var prev = document.createElement('li');
                prev.appendChild(document.createTextNode("<"));
                
                pageturntable.appendChild(prev);
                if(k==info.pagenumber){
                    prev.disable = true;
                    prev.style.cursor = "not-allowed";
                }else{
                    prev.disable = false;
                    prev.style.cursor = "pointer";
                    prev.addEventListener('click', function() {
                        resultPage(info.pagenumber-1);
                    });
                }
            }
            if(k==info.pagenumber){
                var select = document.createElement('li');
                select.classList = "active";
                select.appendChild(document.createTextNode(k));
                select.addEventListener('click', function() {
                    resultPage(k);
                });
                select.style.cursor = "pointer";
                pageturntable.appendChild(select);
            }else{
                var unselect = document.createElement('li');
                unselect.appendChild(document.createTextNode(k));
                unselect.addEventListener('click', function() {
                    resultPage(k);
                });
                unselect.style.cursor = "pointer";
                pageturntable.appendChild(unselect);
            }
            if(k==info.totalpage){
                var next = document.createElement('li');
                next.appendChild(document.createTextNode(">"));
                pageturntable.appendChild(next);
                if(k==info.pagenumber){
                    next.disable = true;
                    next.style.cursor = "not-allowed";
                }else{
                    next.style.cursor = "pointer";
                    next.disable = false;
                    next.addEventListener('click', function() {
                        authorPage(info.pagenumber+1);
                    });
                }
            }
        }
    }
}