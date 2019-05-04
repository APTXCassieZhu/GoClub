function checkfavorite(){
    var username = $.cookie('username');
    var clubname = $.cookie('clubname');
    console.log(username);
    if(username==""||username==undefined){
        document.getElementById('favbtn').style.display = "none";
    }else{
        document.getElementById('favbtn').style.display = "inline";
        $.ajax({
            url: "club.html/check_fav",
            type: "post",
            async: false,
            data: {username: username, club:clubname},
            success: function (data) {
                if(data=="fav"){
                    document.getElementById('favbtn').src = "../img/star.png";
                }else{
                    document.getElementById('favbtn').src = "../img/star-empty.png";
                }
            }
        });
    }
}


function showdetail(){
    checkfavorite();
    var clubname = $.cookie('clubname');
    $.ajax({
        url: "club.html/show",
        type: "post",
        async: false,
        data: {club:clubname},
        success: function (data) {
            // update logo, name, decription, contact, event
        }
    });
}

function favoriteList(){
    var username = $.cookie('username');
    var clubname = $.cookie('clubname');
    
    console.log(document.getElementById("favbtn").src);
    if(document.getElementById("favbtn").src.indexOf("star.png") != -1){
        $.ajax({
            url: "club.html/unfav",
            type: "post",
            async: false,
            data: {username:username,club:clubname},
            success: function (data) {
                document.getElementById('favbtn').src = "../img/star-empty.png";
            }
        });
    }
    else if(document.getElementById("favbtn").src.indexOf("star-empty.png") != -1){
        $.ajax({
            url: "club.html/fav",
            type: "post",
            async: false,
            data: {username:username,club:clubname},
            success: function (data) {
                document.getElementById('favbtn').src = "../img/star.png";
            }
        });
    }
}