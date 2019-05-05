function gohome(){
    $.cookie('clubname', "");
    document.location.href="./home.html";
}

function goprofile(){
    document.location.href="./profile.html";
}

function gologin(){
    $.cookie('clubname', "");
    document.location.href="./login.html";
}

function gologout(){
    $.cookie('username', "");
    $.cookie('clubname', "");
    gohome();
}

function goabout(){
    $.cookie('clubname', "");
    window.location.href="./about.html";
}

function gosearchresult() {
    $.cookie('clubname', "");
    var word = document.getElementById("search_word").value;
    $.cookie('search_word',word);
    console.log("word:" + word);
    if(word!=""){
        document.location.href="./searchResult.html";  
    } 
}

function sendEmail() {
    window.location.href="./contact.html";    
}

function goclubdetail(clubname){
    $.cookie('clubname', clubname);
    document.location.href="./clubDetail.html";
}

function gocontact(clubname){
    $.cookie('clubname', clubname);
    window.location.href="./contact.html";  
}