$(document).ready(function(){
    var login_form = $("#login");
    login_form.submit( function(e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/user/login',
            headers: {
                Accept: "*/*"
            },
            data: { username: $('#name').val(), password: $('#pwd').val() },
            success: function (data){
                console.log('data: ',data);
                if(data == ""){
                    alert("\nPassword or username is incorrect.");
                } else {
                    $.cookie('username', $('#name').val());
                    console.log("Current user is ",$.cookie('username'));
                    window.location.href="/home.html";
                }
            }
        })
    })
});