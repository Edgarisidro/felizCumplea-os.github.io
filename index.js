const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Feliz cumpleaños pasatela bonito<3')
     // Crear un nuevo elemento de imagen
    const img = document.createElement('img');
    img.src = 'https://i.pinimg.com/736x/ff/89/0c/ff890c2cd6b6b717a25260f7a9ba29d2.jpg'; // Reemplaza con la URL o ruta de tu imagen
    img.alt = 'Imagen de feliz cumpleaños';
    img.style.width = '200px'; // Ajusta el tamaño según sea necesario
    img.style.marginTop = '20px'; // Opcional: agrega un margen superior
    
    // Añadir la imagen al documento, por ejemplo al final del body
    document.body.appendChild(img);
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
