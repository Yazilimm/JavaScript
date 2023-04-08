$(document).ready(function(){
    $('p').css("color","red");
    $('h1,h2,h3').css("color","red");
    
    $("#deneme").click(function(){
        $('radio').css("width","105px").css("height","105px");
        $("tr td:first").css("background-color","red").css("height","105px"); 
    });


})