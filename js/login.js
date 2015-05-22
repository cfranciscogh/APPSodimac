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
	   $.mobile.changePage( "panel.html", {transition: "slider", reloadPage:true} );
   }
   else{
	   $.mobile.loading('hide');
	   navigator.notification.alert(
            'Usuario y/o clave son incorrectos!',  // message
            alertDismissed,         // callback
            'Informaci\u00f3n',            // title
            'Aceptar'                  // buttonName
        );
	   $("#usuario").val("");
	   $("#clave").val("");
	   $("#usuario").focus();
	   $(".loadLogin").fadeOut("fast");
   }
};

function alertDismissed(){
}
