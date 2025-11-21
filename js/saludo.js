let nombreUsuario = localStorage.getItem("emailUsuario");
let linkLogin = document.querySelector(".login_b")
let linkRegistro = document.querySelector(".register_b")
let header= document.querySelector(".listanavegador")

if (nombreUsuario!=null){
    linkLogin.style.display="none";
    linkRegistro.style.display="none"
    header.innerHTML += `<li class="elementosheader saludo">Bienvenido: ${nombreUsuario}</li>`;
    header.innerHTML += `<li class="elementosheader logout"><a href="#">LOGOUT</a></li>`;
}

