function changepassword(){
    document.getElementById("change_error1").style.display = "none";
    document.getElementById("change_error2").style.display = "none";
    document.getElementById("change_error3").style.display = "none";
    var old = document.getElementById("old-password").value;
    var new1 = document.getElementById("new-password").value;
    var new2 = document.getElementById("confirm-password").value;
    if(new1==""||new2==""){
        document.getElementById("change_error3").style.display = "block";
    }else if(new1!=new2){
        document.getElementById("change_error2").style.display = "block";
    }else{
        $.ajax({
            url: "profile.html/change_password",
            type: "post",
            async: false,
            data: {username: $.cookie('username'),oldpassword: old, newpassword: new1},
            success: function (data) {
                if(data==0){
                    document.getElementById('change-password-popup').style.display = "none";
                }else if(data==1){
                    document.getElementById("change_error1").style.display = "block";
                }
            }
        });
    }
}