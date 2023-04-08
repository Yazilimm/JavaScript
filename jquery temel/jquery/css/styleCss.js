$(document).ready(function(){
    $('#p1').css('color', 'red');

    $('#p2').css({
    "color":'yellow',
    "backgroundColor": 'blue',
    "fontWeight": 'bold',
    "font-size":"25px"
    });

    var styleObject = {
        "color":'yellow',
        "backgroundColor": 'blue',
        "fontWeight": 'bold',
        "font-size":"25px"
    };
    $("#p2").css(styleObject);
        
    var styleObjectCamelCase = {
        color:'yellow',
        backgroundColor: 'blue',
        fontWeight: 'bold',
        fontSize:"25px"
    };
    $(".p2").css(styleObjectCamelCase);

});














