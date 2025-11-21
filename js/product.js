let queryStringprod = location.search
let queryStringObjprod = new URLSearchParams (queryStringprod);
let id_pindividual = queryStringObjprod.get("id");

let productosolo = document.querySelector(".productosolo.product");
let review = document.querySelector(".productosolo.comentarios")


let urlproducto = `https://dummyjson.com/products/${id_pindividual}`


fetch(urlproducto)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        //seccion producto
        let informacion_producto = []

        let producto_solo = data;
        let tagsTexto = ""
        
        informacion_producto += `
                <img src=${producto_solo.thumbnail} alt="aleatoriofotosiete">
                <h3>${producto_solo.title}</h3>
                <p class="pprod">Marca: ${producto_solo.brand}</p>
                <p class="pprod">${producto_solo.description}</p>
                <p class="pprod">Precio: $${producto_solo.price}</p>
                <p class="pprod">Categoría: ${producto_solo.category}</p>
                <p class="pprod">Stock: ${producto_solo.stock}</p>
                `
        let tag = ''
        for (let i = 0; i < producto_solo.tags.length && i < 3; i++) {
           tag +=`<li class="pprod">${producto_solo.tags[i]}`
            
        }   
        informacion_producto += tag


        productosolo.innerHTML = informacion_producto;

        //seccion review
        let listaReview = producto_solo.reviews
        let contenido_review = []

        for (let i = 0; i < listaReview.length; i++) {
            let comentarios = listaReview[i]

            contenido_review += `<div class="coment">
                <p class="pprod">Calificación: ${comentarios.rating}</p>
                <p class="pprod">Comentario: ${comentarios.comment}</p>
                <p class="pprod">Fecha: ${comentarios.date}</p>
                <p class="pprod">Usuario: ${comentarios.reviewerName}</p>
            </div>`

        }
        review.innerHTML = contenido_review;
        
    })
    .catch(function (error) {
        console.log(error);
    });