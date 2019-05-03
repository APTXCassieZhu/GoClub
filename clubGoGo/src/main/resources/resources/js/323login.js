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
            async: false,
            data: { username: $('#name').val(), password: $('#pwd').val() },
            success: function (data){
                if(data == null){
                    alert("Password or username is incorrect.");
                } else {
                    $.cookie('username', $('#name').val());
                    document.location.href("/home.html")
                    console.log(data);
                }
            }
        })
    })
});