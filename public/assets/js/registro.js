var cargarPagina = function () {
    //llamo elementos del dom para obtener datos
    var botonEnviar = $("#botonEnviar");
    var areaTel = $('#areaTelefono');   
    areaTel.keyup(validarTel);
    botonEnviar.submit(generarCodigo);
};

var validarTel = function () {
    var botonEnviar = $("#botonEnviar");
    var termCond = $('#termCond');
    //condiciones para que se habilite el boton
    if (termCond.prop("checked")==true && $(this).val().trim().length == 10 ) {
        botonEnviar.removeAttr("disabled");        
    } else {
        botonEnviar.attr("disabled", true);
    }
};

var generarCodigo = function(e){
    e.preventDefault();
    location.href = "views/codigo.html";
}



$(document).ready(cargarPagina);
