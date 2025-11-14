window.addEventListener("submit", function () {

  let queryString = location.search;
  let queryStringObj = new URLSearchParams(queryString);

  let informacion = queryStringObj.get('buscador');

  let vacio = "El campo de búsqueda está vacío.";
  let mensaje = "El texto que ingreses debe tener al menos tres caracteres.";

  if (informacion == null) {
    alert(vacio);
  } else if (informacion.length < 3) {
    alert(mensaje);
  }

});