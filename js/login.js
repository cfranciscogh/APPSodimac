// JavaScript Document
// JavaScript Document
$(document).ready(function(e) {
    	$("#ingresar").click(function(e) {
            e.preventDefault();
			$.mobile.loading('show');
			setTimeout(loginValidar, 1000);
        });
});

var loginValidar = function(){
   if ( $("#usuario").val() == "admin" && $("#clave").val() == "1234" )
   {
	   location.href="panel.html";
   }
   else{
	   $.mobile.loading('hide');
	   alert("Usuario y/o clave son incorrectos");
	   $("#usuario").val("");
	   $("#clave").val("");
	   $("#usuario").focus();
	   $(".loadLogin").fadeOut("fast");
   }
};
