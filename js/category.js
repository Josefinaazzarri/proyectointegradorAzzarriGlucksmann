let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("categoria");

let productosCategory = document.querySelector(".dicaja1");
let tituloCategory = document.querySelector(".titulocate");
let productosCategorydos = document.querySelector(".dicaja2");
let lista = document.querySelector(".licajacostado");

//LISTA COSTADO
 let urlLista = "https://dummyjson.com/products/category-list"
    
fetch(urlLista)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let contenido_lista= []
        for (let i = 0; i < data.length; i++) {
            let cat = data[i];
            contenido_lista += `<li><a href="./category.html?categoria=${cat}">${cat}</a></li>`
        }
        lista.innerHTML= contenido_lista
    })
    .catch(function (error) {
        console.log(error);
    });

//CATEGORIAS

let urlCategory = `https://dummyjson.com/products/category/${categoria}`

fetch(urlCategory)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        productosCategorydos.innerHTML = []
        if (categoria != null) {
            tituloCategory.innerHTML = categoria.toUpperCase();
            let contenido = [] 

            let products = data.products;
            for (let i = 0; i < products.length; i++) {
                let prod = products[i];
                console.log(prod);
                contenido += `<article class="articlesection cat">
                <a href="./product.html?id=${prod.id}"><img src=${prod.thumbnail} alt="aleatoriofotodiez"></a>
                <h4>${prod.title}</h4>
                <p>$${prod.price}</p>
                <a href="./product.html?id=${prod.id}" class="but">VER DETALLE</a>
            </article>`
            }
            productosCategory.innerHTML = contenido;
        }
    })
    .catch(function (error) {
        console.log(error);
    });
