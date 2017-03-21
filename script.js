$(document).ready(function(){
    var password="ScriptEd"
$("#button").click(function() {

if(password===$("#password").val()){
    $("p").append("right password");
}

if(password !== $("#password").val()){
     $("p").append("wrong password");
     alert('stuff');

}

// alert($("#password").val());
});
});



