function onclick(){
    alert("click!")
}

function saludar(){
    let nombre = document.getElementById("nombreUsuario").value;
    const title = document.createElement("h1");
    title.textContent = `Buenas tardes ${nombre}.`;
    title.id = "title"
    // document.getElementById("title").style.color = "red"
    document.body.appendChild(title);
    alert("termino");
}