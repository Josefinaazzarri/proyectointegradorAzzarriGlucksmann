let form = document.querySelector(".formularioreg form")
let email = document.querySelector("#mail")
let contraseña = document.querySelector("#contra")
let repetir = document.querySelector("#contras")
let checkbox = document.querySelector("#terminosycondiciones")

form.addEventListener("submit", function(evento){
    if (email.value == "") {
        alert("El email es obligatorio");
        evento.preventDefault();
    } else if (contraseña.value=="") {
        alert("La contraseña es obligatoria")
        evento.preventDefault();
    }else if (contraseña.value.length < 6) {
        alert("la contraseña debe tener mas de 6 digitos")
        evento.preventDefault();
    }else if (contraseña.value !== repetir.value) {
        alert("Las contraseñas no coinciden")
        evento.preventDefault();
    }else if (!checkbox.checked) {
        alert("Debe aceptar los términos y condiciones");
        evento.preventDefault();
    }
})