/*
DESCRIPCIÓN: Evalúa el login y determina si los campos tienen contenido
PARÁMTEROS: Ninguno
RETURN: Ninguno
 */

/*function setLogin(){
    
}*/

function editUser(){
    try{
        var inputUser = document.getElementById("user");
        inputUser.classList.add("edit-input");
    }
    catch{
        console.log.error;
    }
}

function editPass(){
    try{
        var inputPass = document.getElementById("pass");
        inputPass.classList.add("edit-input");
    }
    catch{
        console.log.error;
    }
}

function emptyValues(){
    try {
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        if(user==""){
            alert("Campo usuario obligatorio");
            var inputUser = document.getElementById("user");
            inputUser.classList.remove("edit-input");
            inputUser.classList.add("error-input");
        }
        if(pass==""){
            alert("Campo contraseña obligatorio");
            var inputUser = document.getElementById("pass");
            inputUser.classList.remove("edit-input");
            inputUser.classList.add("error-input");
        }
        return;
    } catch (error) {
        console.log(error);
    }
}

function setLogin(){
    try {
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        if(user=="mac" && pass=="2022"){
            alert("Bienvenido");
        }
        else{
            alert("¡Datos incorrectos!");
        }
    } catch (error) {
        console.log(error);
    }
}