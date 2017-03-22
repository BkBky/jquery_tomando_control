//http://www.locomotion.mx/challenges/240/?course=1&week=8&day=1




document.getElementById("h1").style.color = "blue";


var x = document.getElementsByTagName("h1").style.color = "blue";


//#Muestra el h1 del documento:
document.getElementsByTagName("h1")

//#muestra el elemento  "modal fade"
document.getElementsByClassName("modal fade");

document.body.style.fontSize="24px"

//#modifica el fondo de los párrafos:
$("p").css("background-color", "yellow");

$("p").css({"background-color": "yellow", "font-size": "200%"});

//#usando traverse 
$("ul li p").last().css("background-color", "red");

//udando traverse method y animate
$("ul").animate({paddingLeft: "+=100px"});

//#selectors / traverse methods
$("ul li p").last().css("background-color", "red").on( "click", function() {
    console.log( "<p> was clicked" );
});
$("ul li").has("p").css("background-color", "green");



