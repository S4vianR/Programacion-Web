// Variables
const divMensaje = document.getElementById('mensaje');
const femeninoRadio = document.getElementById('femeninoRadio');
const masculinoRadio = document.getElementById('masculinoRadio');
const nameText = document.getElementById('nameText');
const resetButton = document.getElementById('resetButton');


// Metodos
const mensaje = () => {
    let opcion = document.querySelector('#radiosDiv > input[name=sexo]:checked');
    let mensaje = document.createElement('h3')
    divMensaje.innerHTML = ''
    if (opcion.value === 'femenino') {
        mensaje.textContent = `Bienvenida ${nameText.value}`
        divMensaje.appendChild(mensaje)
    } else if (opcion.value === 'masculino') {
        mensaje.textContent = `Bienvenido ${nameText.value}`
        divMensaje.appendChild(mensaje)
    }
}

// Eventos
femeninoRadio.addEventListener('click', mensaje);
masculinoRadio.addEventListener('click', mensaje);
resetButton.addEventListener('click', () => {
    divMensaje.innerHTML = ''
});

