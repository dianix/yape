var cargarPagina = function(){
  setTimeout(transicionPagina,3000) 
};

var transicionPagina = function(){
    location.href = "reg-tarjeta.html";
};


$(document).ready(cargarPagina);