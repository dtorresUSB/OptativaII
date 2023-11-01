function publicar(){
    var variable=$('#dato').val();
    $('#info').html(variable);
}

function abrir(){
    $('#info').html('La pagina esta abierta');
    window.open('https://www.usbbog.edu.co/');
}

function destruir(){
    $('#info').html('La pagina se cierra en 3s');
    setTimeout("cerrar()",3000);
}

function cerrar(){
    window.close();
}