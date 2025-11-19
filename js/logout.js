let logoutlink = document.querySelector("");
let loginlink = document.querySelector("");
let registerlink = document.querySelector(".register_b");

if (logoutlink) {
    logoutlink.addEventListener("click", function () {


        localStorage.removeItem("usuario");

        logoutlink.style.display = "none";

        loginlink.style.display = "inline-block";
        registerlink.style.display = "inline-block";

        location.href = "./login.html";
    });
}