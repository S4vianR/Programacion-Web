const form1 = document.getElementById('form1');
const primerNombreInput = document.getElementById('primerNombreInput');
const primerApellidoInput = document.getElementById('primerApellidoInput');
const segundoApellidoInput = document.getElementById('segundoApellidoInput');
const semestreInput = document.getElementById('semestreInput');
const correoInput = document.getElementById('correoInput');
const passwordInput = document.getElementById('passwordInput');

primerNombreInput.addEventListener("blur", () => {
    validarDatos(1)
});

primerApellidoInput.addEventListener("blur", () => {
    validarDatos(2)
});

semestreInput.addEventListener("blur", () => {
    validarDatos(3)
});

correoInput.addEventListener("blur", () => {
    validarDatos(4)
});

passwordInput.addEventListener("blur", () => {
    validarDatos(5)
});


function validarDatos(opcion) {
    let validacion;
    switch (opcion) {
        case 1:
            validacion = primerNombreInput.validity;
            console.log(validacion);
            let nom = document.getElementById("nom");
            let speech1 = document.getElementById("speech1");
            if (validacion.valueMissing) {
                primerNombreInput.setCustomValidity("Por favor ingrese su primer nombre");
                console.log(primerNombreInput.validationMessage)
                speech1.classList.remove("ocultar")
                nom.textContent = primerNombreInput.validationMessage;
            } else if (!isNaN(parseInt(primerNombreInput.value))) {
                primerNombreInput.setCustomValidity("Por favor ingrese texto, no numeros");
                speech1.classList.remove("ocultar")
                nom.textContent = primerNombreInput.validationMessage;
            } else {
                primerApellidoInput.setCustomValidity("");
                speech1.classList.add("ocultar")
            }
            break;
        case 2:
            validacion = primerApellidoInput.validity;
            let apell1 = document.getElementById("apell1");
            let speech2 = document.getElementById("speech2");
            console.log(validacion);

            if (validacion.valueMissing) {
                primerApellidoInput.setCustomValidity("Por favor ingrese su primer apellido");
                speech2.classList.remove("ocultar")
                apell1.textContent = primerApellidoInput.validationMessage;
            } else if (!isNaN(parseInt(primerApellidoInput.value))) {
                console.log("entro")
                primerApellidoInput.setCustomValidity("Por favor ingrese texto, no numeros");
                speech2.classList.remove("ocultar")
                apell1.textContent = primerApellidoInput.validationMessage;
            } else {
                primerApellidoInput.setCustomValidity("");
                speech2.classList.add("ocultar")
                apell1.textContent = " * ";
            }
            break;
        case 3:
            // Case para el input number del semestre
            // Accion si esta vacio 
            validacion = semestreInput.validity;
            let sem = document.getElementById("sem");
            let speech3 = document.getElementById("speech3");

            if (validacion.valueMissing) {
                semestreInput.setCustomValidity("Por favor ingrese su semestre");
                speech3.classList.remove("ocultar")
                sem.textContent = semestreInput.validationMessage;
            } // badInput 
            else if (validacion.badInput) {
                semestreInput.setCustomValidity("Por favor ingrese un numero valido");
                speech3.classList.remove("ocultar")
                sem.textContent = semestreInput.validationMessage;
            } // rangeOverflow

            else if (validacion.rangeOverflow || validacion.rangeUnderflow) {
                semestreInput.setCustomValidity("Por favor ingrese un numero valido");
                speech3.classList.remove("ocultar")
                sem.textContent = semestreInput.validationMessage;
            } // accion  si todo esta bien
            else {
                semestreInput.setCustomValidity("");
                speech3.classList.add("ocultar")
            }
            break;
        case 4:
            // Validacion del correo
            validacion = correoInput.validity;
            let corr = document.getElementById("corr");
            let speech4 = document.getElementById("speech4");

            if (validacion.valueMissing) {
                correoInput.setCustomValidity("Por favor ingrese su correo");
                speech4.classList.remove("ocultar")
                corr.textContent = correoInput.validationMessage;
            } else if (validacion.typeMismatch) {
                correoInput.setCustomValidity("Por favor ingrese un correo valido");
                speech4.classList.remove("ocultar")
                corr.textContent = correoInput.validationMessage;
            } else {
                correoInput.setCustomValidity("");
                speech4.classList.add("ocultar")
            }
            break;
        case 5:
            // Validacion de la contraseña
            validacion = passwordInput.validity;
            let pass = document.getElementById("pass");
            let speech5 = document.getElementById("speech5");

            if (validacion.valueMissing) {
                passwordInput.setCustomValidity("Por favor ingrese su contraseña");
                speech5.classList.remove("ocultar")
                pass.textContent = passwordInput.validationMessage;
            } else if (validacion.tooLong || validacion.tooShort) {
                passwordInput.setCustomValidity("Por favor ingrese una contraseña de 6 a 24 caracteres");
                speech5.classList.remove("ocultar")
                pass.textContent = passwordInput.validationMessage;
            } else {
                speech5.classList.add("ocultar")
            }
            break;
    }
}
