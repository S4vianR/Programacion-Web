const radios = document.querySelectorAll('input[type=radio]');
const obras = document.querySelectorAll('#obras');

/* Check if the lista is checked, if it is checked, hide the images and if pintura is checked, show the images */
radios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.id == 'lista') {
            obras.forEach(obra => {
                obra.style.display = 'none';
                obra.style.visibility = 'collapse';
            });
        } else if (radio.id == 'pintura') {
            obras.forEach(obra => {
                obra.style.display = 'block';
                obra.style.visibility = 'visible';
            });
        }
    });
});