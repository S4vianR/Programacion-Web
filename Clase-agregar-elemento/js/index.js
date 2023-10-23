const agregarElementoButton = document.getElementById("agregarElementoButton");
const agregarImagenButton = document.getElementById("agregarImagenButton");
const elementoRadio = document.getElementById("elementoRadio");
const imagenRadio = document.getElementById("imagenRadio");

agregarElementoButton.addEventListener("click", () => {
    agregarElemento();
});

agregarImagenButton.addEventListener("click", () => {
    agregarImagen();
});

elementoRadio.addEventListener("click", () => {
    mostrarOpciones(1);
});

imagenRadio.addEventListener("click", () => {
    mostrarOpciones(2);
});

function mostrarOpciones(opciones) {
    let divLista = document.getElementById("divLista");
    let divImagen = document.getElementById("divImagen");
    if (opciones == 1) {
        divLista.classList.remove("ocultar");
        divLista.classList.add("mostrar");
        divImagen.classList.add("ocultar");
    } else {
        divImagen.classList.remove("ocultar");
        divImagen.classList.add("mostrar");
        divLista.classList.add("ocultar");
    }

}

function agregarElemento() {
    let lista = document.getElementById("listaPlatillos");
    /* let lista = document.querySelector(".lista > #listaPlatillos"); */
    let valor = prompt("Ingrese el platillo a agregar", "Platillo");
    if (valor === null || valor === "") {
        alert("Debe ingresar un valor");
    } else {
        let elemento = document.createElement("li");
        elemento.appendChild(document.createTextNode(valor));
        lista.appendChild(elemento);
    }
}

function agregarImagen() {
    let contenedorImagen = document.getElementById("contenedorImagen");
    let imagen = document.createElement("img");
    imagen.src = "https://media.tenor.com/r0K6p4H23kQAAAAd/its-raining-tacos-tacos.gif";
    imagen.alt = "Imagen";
    contenedorImagen.appendChild(imagen);
}