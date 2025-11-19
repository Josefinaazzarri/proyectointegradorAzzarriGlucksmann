let nombreUsuario = localStorage.getItem("emailUsuario");
if (!usuarioLogueado) {
    return;
}
let listaNav = document.querySelector(".listanavegador");
let linkLogin = document.querySelector(".login_b");
let linkRegistro = document.querySelector(".register_b");


