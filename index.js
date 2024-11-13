const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('Feliz cumpleaños, pásatela bonito ojala te la pases muy lindo hoy en tu dia, se que no es mucho pero pues ando pobre <3');

    // Usar setTimeout para esperar un momento después de la alerta
    setTimeout(() => {
        // Crear un nuevo elemento de imagen
        const img = document.createElement('img');
        img.src = 'https://i.pinimg.com/736x/ff/89/0c/ff890c2cd6b6b717a25260f7a9ba29d2.jpg';
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
