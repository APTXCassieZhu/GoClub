function changepassword(){
    document.getElementById("change_error1").style.display = "none";
    document.getElementById("change_error2").style.display = "none";
    document.getElementById("change_error3").style.display = "none";
    $.cookie('username', "user1");
    var old = document.getElementById("old-password").value;
    var new1 = document.getElementById("new-password").value;
    var new2 = document.getElementById("confirm-password").value;
    console.log(old);
    console.log(new1);
    console.log(new2);
    if(new1==""){
        console.log("111111111");
        document.getElementById("change_error3").style.display = "table-row";
    }
    if(new1!=new2){
        console.log("222222222");
        document.getElementById("change_error2").style.display = "table-row";
    }
    if(new1==new2&&new1!=""){        
        console.log("333333333");
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