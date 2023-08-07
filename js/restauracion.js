


window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });
  document.querySelector('.scroll-to-top').addEventListener('click', function() {
      window.scrollTo({
      top: 0,
      behavior: 'smooth'
      });
  });

 // Escucha el evento de clic en los elementos del menú
 const menuItems = document.querySelectorAll('.nav-menu__item');
 menuItems.forEach(item => {
     item.addEventListener('click', () => {
        // Oculta automáticamente la lista de elementos al hacer clic
        const menuToggle = document.getElementById('menu-toggle');
        menuToggle.checked = false;
     });
 });

// CAMBIO DE IMAGENES
  const imagenes = [
    'images/limpieza.jpeg',
    'images/volumen.jpg',
    'images/fuente.JPG'
    ]
    function cambiarImagen() {
        const imgElement = document.getElementById('imagen-cambiante');
        let index = 0;
        setInterval(() => {
            imgElement.src = imagenes[index];
            index = (index + 1) % imagenes.length;
        }, 4000); // 4000 milisegundos = 4 segundos
    }
    cambiarImagen(); // Iniciar el cambio de imágenes
    // Inicia el cambio de imagen al cargar la página


    //VIDEO
    const playButton = document.getElementById('playButton');
            const videoModal = document.getElementById('videoModal');
            const closeButton = document.getElementById('closeButton');
            const videoPlayer = document.getElementById('videoPlayer');

            playButton.addEventListener('click', () => {
            // Mostrar el modal y el botón de cierre al hacer clic en el botón
            videoModal.style.display = 'block';
            closeButton.style.display = 'block';
            
            // Mostrar la capa semi-transparente sobre el fondo
            videoModal.insertAdjacentHTML('afterbegin', '<div class="modal-overlay"></div>');
            
            // Mostrar el video dentro del modal
            videoPlayer.style.display = 'block';
            videoPlayer.play();
            });

            closeButton.addEventListener('click', () => {
            // Ocultar el modal, el botón de cierre y la capa semi-transparente al hacer clic en el botón de cierre
            videoModal.style.display = 'none';
            closeButton.style.display = 'none';
            videoModal.querySelector('.modal-overlay').remove(); // Eliminar la capa semi-transparente
            videoPlayer.pause();
            });