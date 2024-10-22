document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('video');

    // Crea un IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;

            if (entry.isIntersecting) {
                // Riproduci il video se è visibile
                video.play();
            } else {
                // Metti in pausa il video se non è visibile
                video.pause();
            }
        });
    }, { threshold: 0.25 }); // Il video è considerato visibile al 25% della sua altezza

    // Attacca l'osservatore a ogni video
    videos.forEach(video => {
        observer.observe(video);
    });
});


const burgerMenu = document.getElementById('burgerMenu');
        const nav = document.getElementById('nav');

        burgerMenu.addEventListener('click', () => {
            nav.classList.toggle('active'); // Aggiunge/rimuove la classe active
        });


        document.getElementById('headerLink').addEventListener('click', function(event) {
            // Controlliamo se siamo su index.html
            if (window.location.pathname.endsWith('index.html')) {
                // Verifica se ci troviamo in fondo alla pagina
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                    // Se siamo in fondo, impediamo il comportamento predefinito e scrolliamo su
                    event.preventDefault(); // Impediamo il comportamento predefinito del link
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
                // Se non siamo in fondo, il link porterà a index.html normalmente
            }
        });