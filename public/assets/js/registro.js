// direccion de api
var url = "http://localhost:3000/api/registerNumber";
 //llamo elementos del dom para obtener datos
var areaTel = $('#areaTelefono');
var termCond = $('#termCond');
var botonEnviar = $("#botonEnviar"); 

var cargarPagina = function () { 
    areaTel.keyup(validarTel);
    termCond.click(validarTel);
    botonEnviar.click(generarUsuario);
};

var validarTel = function () {  
    //condiciones para que se habilite el boton
    if (termCond.prop("checked") == true && areaTel.val().trim().length == 10) {
        botonEnviar.removeAttr("disabled");
    } else if (termCond.prop("checked") == false && $(this).val().trim().length != 10) {
        botonEnviar.attr("disabled", true);
    }
};

var generarUsuario = function () {
    //alert("generar usuario")
    //console.log(areaTel.val())
    $.post(url, {'phone':areaTel.val(),'terms':true}, function(usuario){
        if (usuario.success == true) {
            localStorage.setItem('codigoUsuario', usuario.data.code)
            localStorage.setItem('telUsuario', usuario.data.phone)
            //console.log(localStorage.getItem('codigoUsuario'))
            location.href = "codigo.html";
        } else if (usuario.success == false) {
            alert(usuario.message);
        }
    })
}

$(document).ready(cargarPagina);
