function resultPage(page){
    var word = $.cookie('search_word');
    document.getElementById("resultword").innerHTML = word;
    var selector = document.getElementById("category");
    var option = selector.options[selector.selectedIndex].value;
    var choice;

    if (option == " "){
        choice = " ";
    }
    else if(option == "1"){
        choice = "1";
    }
    else if(option == "2"){
        choice = "2";
    }
    else if(option == "3"){
        choice = "3";
    }
    $.ajax({
        url: "search.html/result",
        type: "post",
        async: false,
        data: {keyword: $.cookie('search_word'), sorted: choice, page: page},
        success: function (data) {
        }
    });
}