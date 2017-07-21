// url para pedir nuevo codigo
var url = "http://localhost:3000/api/resendCode";
// elementos de html
var areaCodigo = $("#areaCodigo");
var numTel = $("#numTel");
//valores guardados de la pagina anterior para usar en esta
var codigoActual = localStorage.getItem('codigoUsuario');
var telUsuario = localStorage.getItem('telUsuario');

var codigoNuevo = 0;

var cargarPagina = function () {
    //mostrar telefono registrado en el html
    numTel.text(telUsuario)
    //enviar código generado al usuario
    alert("Tu código de validación es: " + codigoActual);
    areaCodigo.keyup(recibirCodigo)
};

var recibirCodigo = function () {
    if (areaCodigo.val().length == codigoActual.length) {
        var codigoUsuario = areaCodigo.val()
        validarCodigo(codigoUsuario, codigoActual);
    }
};

var validarCodigo = function (codigoUsuario, codigoGenerado) {
    if (codigoUsuario == codigoGenerado) {
        console.log("el cod es igual")
        //location.href = "datos-usuario.html";
    } else if (codigoUsuario != codigoGenerado) {
        console.log("el cod NO es igual")
        generarCodigoNuevo();
    }
};

var generarCodigoNuevo = function () {
    $.post(url, {
        'phone': telUsuario,
        'terms': true
    }, function (req) {
        codigoNuevo = req.data
        alert(req.message + ": " + codigoNuevo)
        codigoActual = codigoNuevo;
        console.log(codigoActual)
    })
}



$(document).ready(cargarPagina);
