const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('Feliz cumpleaños, pásatela bonito <3');
    
    // Usar setTimeout para esperar un momento después de la alerta
    setTimeout(() => {
        // Crear un nuevo elemento de imagen
        const img = document.createElement('img');
        img.src = 'https://i.pinimg.com/736x/ff/89/0c/ff890c2cd6b6b717a25260f7a9ba29d2.jpg';
        img.alt = 'Imagen de feliz cumpleaños';
        img.style.width = '200px'; // Ajusta el tamaño según sea necesario
        
        // Estilos para centrar la imagen
        img.style.position = 'fixed';
        img.style.top = '50%';
        img.style.left = '50%';
        img.style.transform = 'translate(-50%, -50%)';
        img.style.zIndex = '1000'; // Asegura que esté por encima de otros elementos
        img.style.borderRadius = '15px'; // Opcional: da un borde redondeado
        
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
