let saludo2 = document.querySelector(".saludo");          
let login2 = document.querySelector(".login_b");    
let register2 = document.querySelector(".register_b"); 
let logout2 = document.querySelector(".logout");  

logout2.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.removeItem("emailUsuario");
    saludo2.textContent = "";
    saludo2.style.display="none";

    logout2.style.display="none";
    login2.style.display="inline";
    register2.style.display="inline";

    window.location = "./login.html";
});
