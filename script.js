$(document).ready(function(){
var password="ScriptEd"
$("#button").click(function() {

var name = 
$("#password").val();


if(password===name){
    //return "WOOOOOOOHHHH!!111! You guessed the secret word!";
    $("p").append("right password");
} else {
    //return "You are wrong";
     $("p").append("wrong password");
}

});
});