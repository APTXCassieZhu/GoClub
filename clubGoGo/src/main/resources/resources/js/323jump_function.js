function gohome(){
    document.location.href="./home.html";
}

function goprofile(){
    document.location.href="./profile.html";
}

function gologin(){
    document.location.href="./login.html";
}

function gologout(){
    $.cookie('username', "");
    gohome();
}

function goabout(){
    
}

function gosearchresult() {
    var word = document.getElementById("search_word").value;
    $.cookie('search_word',word);
    console.log("word:" + word);
    if(word!=""){
        document.location.href="./searchResult.html";  
        
    } 
}