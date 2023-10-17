let tablaNum = parseInt(prompt("Escribe el número de la tabla:"));
let topeTabla = parseInt(prompt("Escribe el tope de la tabla:"));

for (let i = 1; i <= topeTabla; i++) {
    console.log(`${i} x ${tablaNum} = ${i * tablaNum}`);
}

let arr = [];
let elemento;

do {
    elemento = prompt("Escribe un elemento para agregar al arreglo, escribe 'salir' para terminar");
    if (elemento !== "salir" && elemento !== null) {
        arr.push(elemento);
    }
} while (elemento !== "salir");

console.log(arr);

let num = 1, suma = 0;
while (num !== 0) {
    num = parseInt(prompt("Teclee el número a sumar, 0 para terminar"));
    if (!isNaN(num)) {
        suma += num;
    } else {
        console.log("No ha ingresado un número válido.");
    }
}
console.log("La suma es: " + suma);

let operacion = prompt("Teclee la operación a realizar:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir");

let resultado;

switch (operacion) {
    case "1":
        let valor1Suma = parseInt(prompt("Teclee el primer valor"));
        let valor2Suma = parseInt(prompt("Teclee el segundo valor"));
        resultado = valor1Suma + valor2Suma;
        console.log(`El resultado de la suma de: ${valor1Suma} + ${valor2Suma} = ${resultado}`);
        break;
    case "2":
        let valor1Resta = parseInt(prompt("Teclee el primer valor"));
        let valor2Resta = parseInt(prompt("Teclee el segundo valor"));
        resultado = valor1Resta - valor2Resta;
        console.log(`El resultado de la resta de: ${valor1Resta} - ${valor2Resta} = ${resultado}`);
        break;
    case "3":
        let valor1Multiplicacion = parseInt(prompt("Teclee el primer valor"));
        let valor2Multiplicacion = parseInt(prompt("Teclee el segundo valor"));
        resultado = valor1Multiplicacion * valor2Multiplicacion;
        console.log(`El resultado de la multiplicación de: ${valor1Multiplicacion} * ${valor2Multiplicacion} = ${resultado}`);
        break;
    case "4":
        let valor1Division = parseInt(prompt("Teclee el numerador"));
        let valor2Division = parseInt(prompt("Teclee el denominador"));
        if (valor2Division !== 0) {
            resultado = valor1Division / valor2Division;
            console.log(`El resultado de la división de: ${valor1Division} / ${valor2Division} = ${resultado}`);
        } else {
            console.log("No se puede dividir por cero.");
        }
        break;
    case "5":
        break;
    default:
        console.log("Operación no válida");
        break;
}
