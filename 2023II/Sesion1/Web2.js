function guardar(){
    var check = document.getElementById("aceptado").checked;
    var usuario = $("#usuario").val();
    var password = $("#pass").val();

    if(check==true){
        if(usuario.length<8){
            alert("El usuario debe tener mas de 8 caracteres");
            document.getElementById("usuario").focus();
            return false;
        } else if(password.length<8){
            alert("La contraseña debe tener mas de 8 caracteres");
            document.getElementById("pass").focus();
            return false;
        } else{
            alert("Los datos fueron ingresados correctamente " + usuario);
            return true;
        }
    }else{
        alert('Aun no ha aceptado los terminos y condiciones');
        return false;
    }
}