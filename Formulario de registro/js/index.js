const popUp = document.getElementById("popUp");
const popUpButton = document.getElementById("popUpButton");
const closeButton = document.getElementById("closeButton");
const otroWrapper = document.getElementById("otroWrapper");
const otro = document.getElementById("otro");
const inputsSexo = document.querySelectorAll("input[name=sexo]")

window.addEventListener("load", () => {
    /* Add "hidden" classname */
    popUp.classList.add("hidden");
    otroWrapper.classList.add("hidden");
});

popUpButton.addEventListener("click", (e) => {
    e.preventDefault();
    /* Remove "hidden" classname */
    popUp.classList.remove("hidden");
});

closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    /* Add "hidden" classname */
    popUp.classList.add("hidden");
});

inputsSexo.forEach((input) => {
    input.addEventListener("change", () => {
        if (otro.checked) {
            otroWrapper.classList.remove("hidden");
        } else {
            otroWrapper.classList.add("hidden");
        }
    });
});

var currentYear = new Date().getFullYear();

for (var i = currentYear; i >= currentYear - 60; i--) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    document.getElementById("ano").appendChild(option);
}