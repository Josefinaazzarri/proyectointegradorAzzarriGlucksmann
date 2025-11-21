let formLogin = document.querySelector(".formulariologin")
let emailLogin = document.querySelector("#email")
let contraseñaLogin = document.querySelector("#contrasenia")

formLogin.addEventListener("submit", function(evento){
    evento.preventDefault();
    if (emailLogin.value == "") {
        alert("El email es obligatorio, no debe estar vacío.");
    } else if (contraseñaLogin.value=="") {
        alert("La contraseña es obligatoria, no debe estar vacía.")
    }else if (contraseñaLogin.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres")
    }else{
        localStorage.setItem("emailUsuario", emailLogin.value);
        window.location = "./index.html";
    }
})
