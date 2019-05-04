$(document).ready(function(){
    var contact_form = $("#contact");
    contact_form.submit( function(e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/user/email',
            headers: {
                Accept: "*/*"
            },
            data: { name: $('#name').val(), club: $.cookie('clubname')},
            success: function (data){
                console.log(data);
                alert("\nDear "+$('#name').val()+
                    ", your email has been sent to the "+$.cookie('clubname')
                    +"\'s manager.") ;
            }
        })
    })
});