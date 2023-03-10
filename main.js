const app= document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
 .typeString('Nuestra Señora del Buen Ayre')
 .pauseFor(200)
 .start();
