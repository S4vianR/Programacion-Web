// const fetchButton = document.getElementById('fetchButton');
const divResultado = document.getElementById('resultado');


let resultado;
let numeroDeProductosPagina = 4;
let totalProd = 40;

window.addEventListener("load", () => {
    paginacion();
    consultar();
});

function consultar() {
    // Regular Fetch
    fetch(`https://dummyjson.com/products?limit=${totalProd}`)
        .then(response => response.json())
        .then(data => resultado = data)
        .then(() => {
            procesar(1)
        })
        .catch((error) => {
            console.log(error);
            divResultado.innerHTML = error;
        });
}

function procesar(pagina) {
    let fragmento = new DocumentFragment();
    let totalProductos = resultado.products.length;
    console.log(`\nLa pagina seleccionada es ${pagina}`);
    console.log(`El total de productos es ${totalProductos}`);

    let indiceInicio = (pagina - 1) * numeroDeProductosPagina;
    let indiceFinal = pagina * numeroDeProductosPagina;

    console.log(`El indice inicial es ${indiceInicio}`);
    console.log(`El indice final es ${indiceFinal}`);

    for (let i = indiceInicio; i < indiceFinal; i++) {
        let productoActual = resultado.products[i];
        let nuevoDiv = document.createElement('div');
        nuevoDiv.classList.add('cards')

        // Titulo
        let titulo = document.createElement('h2');
        titulo.textContent = productoActual.title;
        nuevoDiv.appendChild(titulo);

        // Thumbnail
        let thumbnail = document.createElement('img');
        thumbnail.src = productoActual.thumbnail;
        nuevoDiv.appendChild(thumbnail);

        // Descripcion
        let descripcion = document.createElement('p');
        descripcion.textContent = productoActual.description;
        nuevoDiv.appendChild(descripcion);

        // Precio
        let precio = document.createElement('h3');
        precio.textContent = `Precio: $${productoActual.price}`
        precio.style.fontWeight = '600';
        nuevoDiv.appendChild(precio);
        fragmento.appendChild(nuevoDiv);
    }

    divResultado.appendChild(fragmento);
}

function paginacion() {
    let totalBotones = Math.ceil(totalProd / numeroDeProductosPagina);
    let divBotones = document.getElementById('botones');
    let botonNuevo;

    for (let i = 1; i <= totalBotones; i++) {
        botonNuevo = document.createElement('button');
        botonNuevo.value = i;
        botonNuevo.textContent = i;

        botonNuevo.addEventListener('click', () => {
            divResultado.innerHTML = '';
            paginaActual = i;
            procesar(paginaActual);
            console.log(`Presionaste el boton ${i}`);
        });

        divBotones.appendChild(botonNuevo);
    }
}
