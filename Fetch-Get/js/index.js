const fetchButton = document.getElementById('fetchButton');
const divResultado = document.getElementById('resultado');

fetchButton.addEventListener("click", async () => {
    // Regular Fetch
    await fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => procesar(data))
        .catch((error) => {
            console.log(error);
            divResultado.innerHTML = error;
        });
    console.log("Regular fetch button clicked");
});

function procesar(data) {
    let fragmento = new DocumentFragment();
    let totalProductos = data.products.length;
    console.log(`El total de productos es ${totalProductos}`);
    for (let i = 0; i < totalProductos; i++) {
        let productoActual = data.products[i];
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
