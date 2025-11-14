let url = "https://dummyjson.com/products/category/smartphones?limit=10"
const seccionuno = document.querySelector(".aleatorios")
let hdos = document.querySelector(".aleatorios.header2")

fetch(url)
    .then (function (response) {
        return response.json ();
    })
    .then (function(data){
        console.log(data);
        let productos = data.products
        let productosRellenar = []
        
        productosRellenar += `<h2 class="header2"> SMARTPHONES</h2>`
        for (let i = 0; i < productos.length; i++) {
            productosRellenar += `<article class="articlesection">
               <a href="./product.html"> <img src= ${productos[i].thumbnail} alt=" aleatoriofotouno"></a>
                <h4>${productos[i].title}</h4>
                <p>${productos[i].description}</p>
                <p>${productos[i].price}</p>
                <a href="./product.html" class="but">VER DETALLE</a>
            </article>`
        }

        seccionuno.innerHTML = productosRellenar

    })
    .catch (function(error) {
        console.log(error);
    })


let urldos = "https://dummyjson.com/products/category/sunglasses"
const secciondos = document.querySelector(".masvendidos")
let hdos2 = document.querySelector(".masvendidos.header2")

fetch(urldos)
    .then (function (response) {
        return response.json ();
    })
    .then (function(data){
        console.log(data);
        let productosdos = data.products
        let productosRellenardos = []
        
        productosRellenardos += `<h2 class="header2"> SUNGLASSES</h2>`
        for (let i = 0; i < productosdos.length; i++) {
            productosRellenardos += `<article class="articlesection">
                 <a href="./product.html"><img src=${productosdos[i].thumbnail} alt="vendidosuno"></a>
                <h4>${productosdos[i].title}</h4>
                <p>${productosdos[i].description}</p>
                <p>${productosdos[i].price}</p>
                <a href="./product.html" class="but">VER DETALLE</a>
            </article>`
        }

        secciondos.innerHTML = productosRellenardos

    })
    .catch (function(error) {
        console.log(error);
    })