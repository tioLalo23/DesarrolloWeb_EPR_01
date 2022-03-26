/*
DESCRIPCIÓN: Evalúa el login y determina si los campos tienen contenido
PARÁMTEROS: Ninguno
RETURN: Ninguno
 */

/*function setLogin(){
    
}*/

/*Añade la clase edit-input al input del usuario.
La clase edit-input da borde verde al campo*/
function editUser(){
    try{
        var inputUser = document.getElementById("user");
        inputUser.classList.add("edit-input");
    }
    catch{
        console.log.error;
    }
}

/*Añade la clase edit-input al input de la contraseña.
La clase edit-input da borde verde al campo*/
function editPass(){
    try{
        var inputPass = document.getElementById("pass");
        inputPass.classList.add("edit-input");
    }
    catch{
        console.log.error;
    }
}

/*Verifica si hay valores vacíos en los campos.
Si los hay,  quita la clase edit-input (borde verde) y agrega la clase border-input (borde rojo)
La variable stop es un centinela que determina si hubo al menos un campo vacío*/

function emptyValues(){
    try {
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        var stop = 1;
        if(user==""){
            var inputUser = document.getElementById("user");
            inputUser.classList.remove("edit-input");
            inputUser.classList.add("error-input");
            alert("Campo usuario obligatorio");
            stop=0;
        }
        if(pass==""){
            var inputUser = document.getElementById("pass");
            inputUser.classList.remove("edit-input");
            inputUser.classList.add("error-input");
            alert("Campo contraseña obligatorio");
            stop=0;
        }
        return stop;
    } catch (error) {
        console.log(error);
    }
}

/*Ejecuta la función para determinar si hay campos vacíos. Si los hay, no verifica el acceso.
Si no hay valores vacíos, revisa los textos introducidos y los compara con "mac" y "2022" */

function setLogin(){
    try {
        var statusLogin = emptyValues();
        if(statusLogin==0){
            return;
        }
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        if(user=="mac" && pass=="2022"){
            alert("¡Bienvenido!");
        }
        else{
            alert("¡Datos incorrectos!");
        }
    } catch (error) {
        console.log(error);
    }
}