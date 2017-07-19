var cargarPagina = function () {
    //llamo elementos del dom para obtener datos
    var areaTel = $('#areaTelefono'); 
    //console.log(areaTel);   
    areaTel.keyup(validarTel); 
};

var validarTel = function () {
    var $botonEnviar = $("#botonEnviar");
    var termCond = $('#termCond');
    if (termCond.prop("checked") === true && $(this).val().trim().length === 10 ) {
        $botonEnviar.removeAttr("disabled");
    } else {
        $botonEnviar.attr("disabled", true);
    }
};



$(document).ready(cargarPagina);
