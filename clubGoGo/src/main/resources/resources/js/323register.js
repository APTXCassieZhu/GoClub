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
            data: { username: $('#name').val() , password: $('#pwd').val() },
            success: function (data){
                console.log('data: ',data);
                if(data == ""){
                    alert("\nUsername exists, please try another.");
                } else{
                    window.location.href="/login.html";
                }
            }
        })
    })
});