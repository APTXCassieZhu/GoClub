$(document).ready(function(){
    var login_form = $("#login");
    login_form.submit( function(e) {
        var login_data = { username: $('#name').val(), password: $('#pwd').val() };
        console.log(login_data.userEmail," ",login_data.password)
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/user/login',
            contentType:"application/json; charset=utf-8",
            headers: {
                Accept: "application/json; charset=utf-8"
            },
            data: JSON.stringify(login_data),
            dataType:"json",
            success: function (data){
                if(data.status == 'error'){
                    alert(data.error);
                } else {
                    window.location.replace("/home");
                    console.log(data);
                }
            }
        })
    })
});