const addCounterButton = document.getElementById("addCounterButton");
const minusCounterButton = document.getElementById("minusCounterButton");
const resetCounterButton = document.getElementById("resetCounterButton");
const counterLabel = document.getElementById("counter");

let contador = 0;

addCounterButton.addEventListener("click", () => {
    contador++;
    counterLabel.innerHTML = contador;

    if (contador % 2 === 0) {
        counterLabel.style.backgroundColor = "green";
        counterLabel.style.fontSize = "1.2rem";
    }

    if (contador % 2 !== 0) {
        counterLabel.style.backgroundColor = "red";
        counterLabel.style.color = "white";
        counterLabel.style.fontSize = "1.2rem";
    }

    if (contador === 0 || contador % 10 === 0) {
        counterLabel.style.backgroundColor = "white";
        counterLabel.style.color = "black";
        counterLabel.style.fontSize = "1.2rem";
    }

});

minusCounterButton.addEventListener("click", () => {
    contador--;
    counterLabel.innerHTML = contador;

    if (contador % 2 === 0) {
        counterLabel.style.backgroundColor = "green";
        counterLabel.style.color = "white";
        counterLabel.style.fontSize = "1.2rem";
    }

    if (contador % 2 !== 0) {
        counterLabel.style.backgroundColor = "red";
        counterLabel.style.color = "white";
        counterLabel.style.fontSize = "1.2rem";
    }

    if (contador === 0 || contador % 10 === 0) {
        counterLabel.style.backgroundColor = "white";
        counterLabel.style.color = "black";
        counterLabel.style.fontSize = "1.2rem";
    }
});

resetCounterButton.addEventListener("click", () => {
    contador = 0;
    counterLabel.innerHTML = contador;
    counterLabel.style.backgroundColor = "white";
    counterLabel.style.color = "black";
    counterLabel.style.fontSize = "1.2rem";
});