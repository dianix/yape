// direccion de api
var url = "http://localhost:3000/api/registerNumber";
 //llamo elementos del dom para obtener datos
var areaTel = $('#areaTelefono');
var termCond = $('#termCond');
var botonEnviar = $("#botonEnviar"); 

var cargarPagina = function () { 
    areaTel.keyup(validarTel);
    botonEnviar.submit(generarUsuario);
};

var validarTel = function () {  
    //condiciones para que se habilite el boton
    if (termCond.prop("checked") == true && $(this).val().trim().length == 10) {
        botonEnviar.removeAttr("disabled");
    } else if (termCond.prop("checked") == false && $(this).val().trim().length != 10) {
        botonEnviar.attr("disabled", true);
    }
};

var generarUsuario = function () {
    alert("generar usuario")
    //$.post(url, {'phone':areaTel.val(),'terms':true}, function(usuario){})
    //location.href = "views/codigo.html";
}



$(document).ready(cargarPagina);
