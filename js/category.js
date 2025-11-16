let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoria = queryStringObj.get("categoria");

let productosCategory = document.querySelector(".dicaja1");
let tituloCategory = document.querySelector(".titulocate");
let productosCategorydos = document.querySelector(".dicaja2");
let lista = document.querySelector(".licajacostado");

let urlCategory = `https://dummyjson.com/products/category/${categoria}`

fetch(urlCategory)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        lista.innerHTML = `
            <ul class="licajacostado">
                <li><a href="./category.html?categoria=beauty">beauty</a></li>
                <li><a href="./category.html?categoria=fragances">fragrances</a></li>
                <li><a href="./category.html?categoria=furniture">furniture</a></li>
                <li><a href="./category.html?categoria=groceries">groceries</a></li>
                <li><a href="./category.html?categoria=home-decoration">home decoration</a></li>
                <li><a href="./category.html?categoria=kitchen-accessories">kitchen accessories</a></li>
                <li><a href="./category.html?categoria=laptops">laptops</a></li>
                <li><a href="./category.html?categoria=mens-shirts">mens shirts</a></li>
                <li><a href="./category.html?categoria=mens-shoes">mens shoes</a></li>
                <li><a href="./category.html?categoria=mens-watches">mens watches</a></li>
                <li><a href="./category.html?categoria=mobile-accessories">mobile accessories</a></li>
                <li><a href="./category.html?categoria=motorcycle">motorcycle</a></li>
                <li><a href="./category.html?categoria=skin-care">skin care</a></li>
                <li><a href="./category.html?categoria=smartphones">smartphones</a></li>
                <li><a href="./category.html?categoria=sports-accessories">sports accessories</a></li>
                <li><a href="./category.html?categoria=sunglasses">sunglasses</a></li>
                <li><a href="./category.html?categoria=tablets">tablets</a></li>
                <li><a href="./category.html?categoria=tops">tops</a></li>
                <li><a href="./category.html?categoria=vehicle">vehicle</a></li>
                <li><a href="./category.html?categoria=womens-bags">womens bags</a></li>
                <li><a href="./category.html?categoria=womens-dresses">womens dresses</a></li>
                <li><a href="./category.html?categoria=womens-jewellery">womens jewellery</a></li>
                <li><a href="./category.html?categoria=womens-shoes">womens shoes</a></li>
            </ul>
        `;

        productosCategorydos.innerHTML = " "
        if (categoria != null) {
            tituloCategory.innerHTML = categoria.toUpperCase();
            let contenido = [] 

            let products = data.products;
            for (let i = 0; i < products.length; i++) {
                let prod = products[i];
                console.log(prod);
                contenido += `<article class="articlesection cat">
                <a href="./product.html"><img src=${prod.thumbnail} alt="aleatoriofotodiez"></a>
                <h4>${prod.title}</h4>
                <p>${prod.price}</p>
                <a href="./product.html" class="but">VER DETALLE</a>
            </article>`
            }
            productosCategory.innerHTML = contenido;
        }
    })
    .catch(function (error) {
        console.log(error);
    });