const leoRadio = document.getElementById('leoRadio');
const doniRadio = document.getElementById('doniRadio');
const rafaRadio = document.getElementById('rafaRadio');
const miguelRadio = document.getElementById('miguelRadio');
const votaImg = document.getElementById('vota-img');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const votaForm = document.getElementById('vota-form');
let image = document.createElement('img');

window.addEventListener('load', () => {
    image.src = '../../Examen-U3/assets/Vota.png';
    image.alt = 'Vota';
    image.classList.add('image-vota');
    votaImg.appendChild(image);
});

leoRadio.addEventListener('click', () => {
    image.src = '../../Examen-U3/assets/Leo.png';
    image.alt = 'Leo';
    image.classList.add('image-vota');
    votaImg.appendChild(image);
});

doniRadio.addEventListener('click', () => {
    image.src = '../../Examen-U3/assets/Doni.png';
    image.alt = 'Doni';
    image.classList.add('image-vota');
    votaImg.appendChild(image);
});

rafaRadio.addEventListener('click', () => {
    image.src = '../../Examen-U3/assets/Rafa.png';
    image.alt = 'Rafa';
    image.classList.add('image-vota');
    votaImg.appendChild(image);
});

miguelRadio.addEventListener('click', () => {
    image.src = '../../Examen-U3/assets/Mikey.png';
    image.alt = 'Miguel';
    image.classList.add('image-vota');
    votaImg.appendChild(image);
});

votaForm.addEventListener('submit', () => {
    alert('Voto registrado');
});

submitButton.addEventListener('click', () => {
    votaForm.submit();
});

resetButton.addEventListener('click', () => {
    image.src = '../../Examen-U3/assets/Vota.png';
    image.alt = 'Vota';
    image.classList.add('image-vota');
});
