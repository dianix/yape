// elementos de html
var areaCodigo = $("#areaCodigo");
var numTel = $("#numTel");
//valores guardados de la pagina anterior para usar en esta
var codigoOriginal = localStorage.getItem('codigoUsuario');
var telUsuario = localStorage.getItem('telUsuario');


var cargarPagina = function () { 
    //mostrar telefono registrado en el html
    numTel.text(localStorage.getItem('telUsuario'))
    //enviar código generado al usuario
    alert("Tu código de validación es: " + localStorage.getItem('codigoUsuario'));
    areaCodigo.keyup(validarCodigo)
};





$(document).ready(cargarPagina);