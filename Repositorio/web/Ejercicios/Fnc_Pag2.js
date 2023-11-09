function Saludar(){
    alert("Hola, bienvenidos a mi primer ejemplo con JavaScript");
}

function Otro_Saludo(){
    var nombre_variable=13;
    var nom_var2="Este es otro saludo, "
    + "y uso la concatenación numerica" + nombre_variable;
    alert(nom_var2);
}

function EjemploDiv(){
    var variable  = "Ejemplo publicado dentro de un div"
    $("#div_informacion").html(variable);
}

function LimpiarDiv(){
    var variable  = ""
    $("#div_informacion").html(variable);
}
