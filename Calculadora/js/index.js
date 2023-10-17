const addRadio = document.getElementById("addition");
const minusRadio = document.getElementById("minus");
const multiplicationRadio = document.getElementById("multiplication");
const divisionRadio = document.getElementById("division");

addRadio.addEventListener("click", () => {
    evaluate(1);
});

minus.addEventListener("click", () => {
    evaluate(2);
});

multiplicationRadio.addEventListener("change", () => {
    evaluate(3);
});

divisionRadio.addEventListener("change", () => {
    evaluate(4);
});


const evaluate = (op) => {
    let v1, v2, res;
    v1 = parseFloat(document.getElementById("number1").value);
    v2 = parseFloat(document.getElementById("number2").value);
    res = document.getElementById("result");
    if (isNaN(v1) || isNaN(v2)) {
        res.style.color = "red";
        res.value = "Error";
        return;
    } else {
        res.style.color = "black";
        switch (op) {
            case 1:
                res.value = v1 + v2;
                break;
            case 2:
                res.value = v1 - v2;
                break;
            case 3:
                res.value = v1 * v2;
                break;
            case 4:
                res.value = v1 / v2;
                break;
        }
    }
}
