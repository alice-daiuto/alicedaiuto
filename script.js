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

        
/* 
(() => {
  const cursor = document.getElementById("cursor");
  if (!cursor) return;

  // 1) forza cursor:none su root (più forte di body)
  document.documentElement.style.cursor = "none";
  document.body.style.cursor = "none";

  // helper: forza cursor none sull'elemento e sui suoi parent
  const forceNoneUp = (el) => {
    let n = el;
    for (let i = 0; i < 6 && n && n.style; i++) {
      n.style.cursor = "none";
      n = n.parentElement;
    }
  };

  document.addEventListener("mousemove", (e) => {
    // 2) muovi cursore custom
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    // 3) forza cursor:none sull'elemento sotto al mouse
    forceNoneUp(e.target);
  }, true);

  // 4) anche su hover/focus (nav, link, button, ecc.)
  document.addEventListener("mouseover", (e) => forceNoneUp(e.target), true);
  document.addEventListener("focusin", (e) => forceNoneUp(e.target), true);
})();
*/

const gallery = document.querySelector('.image-gallery');

if (gallery) {
  gallery.addEventListener('wheel', (e) => {
    const canScroll = gallery.scrollWidth > gallery.clientWidth;
    if (!canScroll) return;

    // Intervieni solo se il gesto è principalmente verticale
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      gallery.scrollLeft += e.deltaY;
    }
  }, { passive: false });
}
