$(document).ready(function(){
    var register_form = $("#register");
    register_form.submit( function(e) {
        // compare password
        if($('#pwd').val() != $('#pwd2').val()){
            alert("\nPassword did not match: Please try again...");
        }

        // save register user into db
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/user/register',
            headers: {
                Accept: "*/*"
            },
            async: false,
            data: { username: $('#name').val() , password: $('#pwd').val() },
            success: function (data){
                console.log(data);
                document.location.href("/login.html")
            }
        })
    })
});