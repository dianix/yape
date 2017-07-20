var areaCodigo = $("#areaCodigo");
var numTel = $("#numTel");

var cargarPagina = function () { 
    console.log(localStorage.getItem('codigoUsuario'),localStorage.getItem('telUsuario'))
    numTel.text(localStorage.getItem('telUsuario'))
};



$(document).ready(cargarPagina);