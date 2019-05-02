$(document).ready(function(){
    var register_form = $("#register");
    register_form.submit( function(e) {
        if($('#pwd').val() != $('#pwd2').val()){
            alert("\nPassword did not match: Please try again...");
        }
        var register_data = { username: $('#name').val() , password: $('#pwd').val() };
        e.preventDefault();
        console.log(register_data.username," ",register_data.password)
        $.ajax({
            type: 'post',
            url: '/user/register',
            headers: {
                Accept: "*/*"
            },
            contentType:"application/json; charset=utf-8",
            data: JSON.stringify(register_data),
            dataType:"json",
            success: function (data){
                console.log(data);
                window.location.replace("/login");
            }
        })
    })
});