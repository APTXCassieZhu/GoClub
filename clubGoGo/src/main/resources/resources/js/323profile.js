function changepassword(){
    document.getElementById("change_error1").style.display = "none";
    document.getElementById("change_error2").style.display = "none";
    document.getElementById("change_error3").style.display = "none";
    // $.cookie('username', "user1");
    var old = document.getElementById("old-password").value;
    var new1 = document.getElementById("new-password").value;
    var new2 = document.getElementById("confirm-password").value;
    console.log(old);
    console.log(new1);
    console.log(new2);

    if(new1==""){
        document.getElementById("change_error3").style.display = "table-row";
    }
    if(new1!=new2){
        document.getElementById("change_error2").style.display = "table-row";
    }
    if(new1==new2&&new1!=""){   
        console.log("username is:" + $.cookie('username'));
        $.ajax({
            url: "profile.html/change_password",
            type: "post",
            async: false,
            data: {username: $.cookie('username'),oldpassword: old, newpassword: new1},
            success: function (data) {
                if(data==0){
                    document.getElementById('change-password-popup').style.display = "none";
                }else if(data==1){
                    document.getElementById("change_error1").style.display = "table-row";
                }
            }
        });
    }
}

function showfavorite(){
    var username = $.cookie('username');
    if(username!=""){
        document.getElementById("user-name").innerText = "Hi, " + username;
    }
    $(window).ready(function() {
        favoritePage(1);
    });
}

function favoritePage(page){
    var selector = document.getElementById("sort-by");
    var option = selector.options[selector.selectedIndex].value;
    var info;
    $.ajax({
        url: "profile.html/favorite",
        type: "post",
        async: false,
        data: {username: $.cookie('username'), sorted: option, page:page},
        success: function (data) {
            info = jQuery.parseJSON(data);
        }
    });
    $("#favorite-table tr").remove();
    if(info.clubname.length==0){
        document.getElementById("resultEmpty").style.display = "block";
        document.getElementById("divpage").style.display = "none";
    }else{
        document.getElementById("resultEmpty").style.display = "none";
        document.getElementById("divpage").style.display = "block";
        var tbody = document.getElementById("favorite-table");
        var trh = document.createElement('tr');
        tbody.appendChild(trh);
        var thno = document.createElement('th');
        thno.style.width = "5vw";
        var spanth1 = document.createElement('span');
        thno.style.cursor = "default";
        spanth1.appendChild(document.createTextNode("No."));
        thno.appendChild(spanth1);
        trh.appendChild(thno);

        var thclub = document.createElement('th');
        thclub.style.cursor = "default";
        var spanth2 = document.createElement('span');
        spanth2.appendChild(document.createTextNode("Club Name"));
        thclub.appendChild(spanth2);
        trh.appendChild(thclub);
        
        var thevent = document.createElement('th');
        thevent.style.cursor = "default";
        var spanth3 = document.createElement('span');
        spanth3.appendChild(document.createTextNode("Upcoming Event"));
        thevent.appendChild(spanth3);
        trh.appendChild(thevent);

        var thcontact = document.createElement('th');
        thcontact.style.cursor = "default";
        var spanth4 = document.createElement('span');
        spanth4.appendChild(document.createTextNode("Contact Info"));
        thcontact.appendChild(spanth4);
        trh.appendChild(thcontact);

        for(let i=0;i<info.clubname.length;i++){
            var trh = document.createElement('tr');
            tbody.appendChild(trh);
            var thno = document.createElement('td');
            thno.style.width = "5vw";
            var spanth1 = document.createElement('span');
            thno.style.cursor = "default";
            spanth1.appendChild(document.createTextNode(info.start+i));
            thno.appendChild(spanth1);
            trh.appendChild(thno);

            var thclub = document.createElement('td');
            thclub.style.cursor = "pointer";
            var spanth2 = document.createElement('span');
            spanth2.appendChild(document.createTextNode(info.clubname[i]));
            thclub.appendChild(spanth2);
            trh.appendChild(thclub);
            thclub.addEventListener('click', function() {
                goclubdetail(info.clubname[i]);
            });
            
            var thevent = document.createElement('td');
            var spanth3 = document.createElement('span');
            spanth3.appendChild(document.createTextNode(info.event[i]==null?"":info.event[i]));
            thevent.appendChild(spanth3);
            trh.appendChild(thevent);
            if(info.event[i]==null){
                thevent.style.cursor = "default";
            }else{
                thevent.style.cursor = "pointer";
                thevent.addEventListener('click', function() {
                    goclubdetail(info.clubname[i]);
                });
            }
            

            var thcontact = document.createElement('td');
            var spanth4 = document.createElement('span');
            spanth4.appendChild(document.createTextNode(info.email[i]==null?"":info.email[i]));
            thcontact.appendChild(spanth4);
            trh.appendChild(thcontact);
            if(info.email[i]==null){
                thcontact.style.cursor = "default";
            }else{
                thcontact.style.cursor = "pointer";
                thcontact.addEventListener('click', function() {
                    gocontact(info.clubname[i]);
                });
            }
        }

        $("#favoritepageturn li").remove();
        var pageturntable = document.getElementById("favoritepageturn");
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
