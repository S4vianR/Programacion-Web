const contenedor = document.getElementById('contenedor');
const radio6 = document.getElementById('radio6');
const radio10 = document.getElementById('radio10');
const radio20 = document.getElementById('radio20');
const mostrarImagenButton = document.getElementById('mostrarImagenButton');
const reiniciarButton = document.getElementById('reiniciarButton');
const color = document.getElementById('color');
const numCuadrosLabel = document.getElementById('numCuadros');
const personalizadoButton = document.getElementById('personalizado');

window.addEventListener("load", () => {
    color.value = "#C9A9A6";
});

radio6.addEventListener("click", () => {
    numCuadrosLabel.textContent = 0;
    dibujarCuadros(6, 6);
});

radio10.addEventListener("click", () => {
    numCuadrosLabel.textContent = 0;
    dibujarCuadros(10, 10);
});

radio20.addEventListener("click", () => {
    numCuadrosLabel.textContent = 0;
    dibujarCuadros(20, 20);
});

personalizadoButton.addEventListener("click", () => {
    numCuadrosLabel.textContent = 0;
    let top1 = 0;
    let left1 = 0;
    do {
        top1 = prompt("Ingrese el número de cuadros en el eje X");
        left1 = prompt("Ingrese el número de cuadros en el eje Y");
        if (top1 != left1) {
            alert("El número de cuadros en el eje X debe ser igual al número de cuadros en el eje Y");
        }
    } while (top1 != left1);
    dibujarCuadros(top1, left1);
});

mostrarImagenButton.addEventListener("click", () => {
    eliminar();
});

reiniciarButton.addEventListener("click", () => {
    numCuadrosLabel.textContent = 0;
    reiniciar();
});

function dibujarCuadros(top1, left1) {
    // Limpiar el contenedor antes de agregar nuevos cuadros
    contenedor.innerHTML = '';
    for (let i = 0; i < top1; i++) {
        for (let j = 0; j < left1; j++) {
            let nuevoDiv = document.createElement("div");
            nuevoDiv.classList.add("interno");
            nuevoDiv.style.backgroundColor = color.value;
            nuevoDiv.style.opacity = 0.98;
            nuevoDiv.style.border = "1px solid #fff";
            nuevoDiv.style.width = `${600 / top1}px`;
            nuevoDiv.style.height = `${600 / left1}px`;
            nuevoDiv.style.top = `${i * (600 / top1)}px`;
            nuevoDiv.style.left = `${j * (600 / left1)}px`;
            console.log(`Top: ${i}\n`)
            console.log(`Left: ${j}\n`)
            contenedor.appendChild(nuevoDiv);
            nuevoDiv.addEventListener("click", () => {
                nuevoDiv.style.opacity = 0;
                setTimeout(() => {
                    nuevoDiv.classList.add('ocultar');
                }, 350);
                // For every time the user clicks on a square, change the numButtonLabel content to the number of squares clicked
                numCuadrosLabel.textContent = document.querySelectorAll('.ocultar').length += 1;
            });
        }
        console.log("\n\n");
    }

}

function eliminar() {
    let divs = document.querySelectorAll(".interno");
    for (let i = 0; i < divs.length; i++) {
        divs[i].remove()
    }
}

function reiniciar() {
    // Uncheck all radio buttons
    radio6.checked = false;
    radio10.checked = false;
    radio20.checked = false;
    personalizadoButton.checked = false;
    dibujarCuadros(6, 6);
}
