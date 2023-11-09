//setTimeout("desactivar()",5000);

function activar(){
    var variable = "La máquina esta encendida";
    $("#info").html(variable);
    window.open("https://www.usbbog.edu.co")
}

function desactivar(){
    window.close()
}

function ejemploDiv(){
    var variable = "Elemento incluido dentro del Div";
    $("#info").html(variable);
}

function borrar(){
    var variable = "";
    $("#info").html(variable);
}

function publicar(){
    var variable=$("#dato").val();
    $("#info").html(variable);

    var contenido = "<strong>Pais: </strong> Colombia<br>"
    +"<strong>Ciudad: </strong> Bogotá" + "<br>"+
    "<strong>Nombre: </strong>  "+ variable;
    $("#texto").html(contenido);
}