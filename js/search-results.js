//buscador de arriba
let buscador = document.querySelector(".barra");
let campoBuscado = document.querySelector("input");

buscador.addEventListener("submit", function(event) {
    event.preventDefault();

    if (campoBuscado.value == "") {
        alert("El campo está vacío");
    } else if (campoBuscado.value.length < 3) {
        alert("Debe tener al menos 3 caracteres");
    } else {
        this.submit();
    }

});

//informacion de la busqueda
let queryStringSearch = location.search
let queryStringObjSearch = new URLSearchParams (queryStringSearch);
let busqueda = queryStringObjSearch.get("buscador");

let cosa_buscada = document.querySelector (".titulosearch");
let informacion_cosa = document.querySelector (".cajaarti");

let urlSearch= `https://dummyjson.com/products/search?q=${busqueda}`
fetch(urlSearch)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        
        if (data.total == 0) {
            informacion_cosa.innerHTML = `<h3 class="header2">No hay resultados para el término: ${busqueda}<h3>`
        } else {
            let informacion = ""
            cosa_buscada.innerHTML = `<h3 class="header2">Resultados de búsqueda: ${busqueda}<h3>`
            for (let i = 0; i < data.products.length; i++) {
                let info = data.products[i]

                informacion += `<article class="articlesearch">
               <a href="./product.html?id=${info.id}"> <img src=${info.thumbnail} alt="vendidosseis"></a>
                <h4>${info.title}</h4>
                <p>${info.description}</p>
                <p>${info.price}</p>
                <a href="./product.html?id=${info.id}" class="but">VER DETALLE</a>
            </article>`
            }
            informacion_cosa.innerHTML = informacion
        }
    })
    .catch(function (error) {
        console.log(error);
    });