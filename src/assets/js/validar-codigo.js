// url para pedir nuevo codigo
var url = "http://localhost:3000/api/resendCode";
// elementos de html
var areaCodigo = $("#areaCodigo");
var numTel = $("#numTel");
//valores guardados de la pagina anterior para usar en esta
var codigoInicial = localStorage.getItem('codigoUsuario');
var telUsuario = localStorage.getItem('telUsuario');

var codigoNuevo = 0;

var cargarPagina = function () { 
    //mostrar telefono registrado en el html
    numTel.text(telUsuario)
    //enviar código generado al usuario
    alert("Tu código de validación es: " + codigoInicial);
    areaCodigo.keyup(recibirCodigo)
};

var recibirCodigo = function(){
    console.log($(areaCodigo).val().length)
    if($(areaCodigo).val().length == 6){
        var codigoUsuario = $(areaCodigo).val();
        validarCodigo(codigoUsuario,codigoInicial);
    }
};

var validarCodigo = function(codigoUsuario,codigoGenerado){
    console.log(codigoUsuario,codigoGenerado)
	if(codigoUsuario == codigoGenerado){
		location.href = "regUser.html";
	} else {
		newCode();
	}
};

var generarCodigoNuevo = function(){
    $.post(url, {'phone':telUsuario,'terms':true}, function(req){
        alert(req.message + ": " + req.data)
    })
}



$(document).ready(cargarPagina);