const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('Felices 20, pásatela bonito ojala te la pases muy lindo hoy en tu dia, sabes que eres mi personita especial y consentida, la mejor psicologa, hermos, preciosa, aplicada y ya dije que estas muy linda? pues lo repito mujer preciosa <3');

    // Usar setTimeout para esperar un momento después de la alerta
    setTimeout(() => {
        // Crear un nuevo elemento de imagen
        const img = document.createElement('img');
        img.src = 'https://i.pinimg.com/736x/9c/29/e3/9c29e3d1420367776f95a521d47cf6be.jpg';
        img.alt = 'Imagen de feliz cumpleaños';
        img.classList.add('modal-image'); // Agrega la clase para el estilo modal

        // Añadir la imagen al documento
        document.body.appendChild(img);
    }, 100); // Espera 100 milisegundos después de la alerta
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});
