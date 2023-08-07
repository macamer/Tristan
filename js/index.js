document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById("icon-home");

        // Función para agregar la clase "fallback" en caso de error de animación
        function handleAnimationError() {
             icon.classList.add("fallback");
        }
        // Evento para detectar errores de animación y aplicar la alternativa
        icon.addEventListener("transitionend", handleAnimationError);
        // Muestra el icono (puedes modificar su posición inicial con top y left)
        icon.style.opacity = "1";
        icon.style.transform = "scale(1)";
});

// Obtener referencia al icono y al mensaje
const icono = document.getElementById('icon-home');
const mensaje = document.getElementById('mensaje');

const esFormatoMovil = window.matchMedia('(max-width: 768px)').matches;

const intervaloMostrar = 5000; // 5000 milisegundos = 5 segundos
const tiempoMostrado = 3000;   // 3000 milisegundos = 3 segundos

let clicEnIcono = false;
let mensajeMostrado = false;
let intevalo;

function ocultarMensaje() {
    mensaje.style.opacity = 0; // Cambiar la opacidad a 0 para ocultar el mensaje suavemente
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 1000); // Esperar 1 segundo antes de ocultar completamente el mensaje
}

function mostrarMensaje() {
    mensaje.style.display = 'block';
    mensaje.style.opacity = 1; // Cambiar la opacidad a 1 para mostrar el mensaje suavemente
}

function mostrarYDespuesOcultarMensaje() {
    mostrarMensaje();
    setTimeout(function () {
        ocultarMensaje();
        mensajeMostrado = true;
    }, tiempoMostrado);
}

function iniciarMostrarMensaje() {
    if (esFormatoMovil) {
        intervalo = setInterval(mostrarYDespuesOcultarMensaje, intervaloMostrar);
    }
}

icono.addEventListener('click', function () {
    clicEnIcono = true;
    clearInterval(intervalo);
    ocultarMensaje();
});
    iniciarMostrarMensaje()



    /*
function iniciarMostrarMensaje() {
    // Verificar si el dispositivo es móvil (ancho de pantalla menor a 768px)          
        if (esFormatoMovil) {
            mostrarMensaje();
            setInterval(mostrarMensaje, intervaloMostrar, tiempoMostrado);
        } else if (clicEnIcono && !esFormatoMovil) {
            ocultarMensaje();
            mensajeMostrado = true;
        } else if (!esFormatoMovil) {
            ocultarMensaje();
        }
    }

   


/*
        // Obtener referencia al icono y al mensaje
        const icono = document.getElementById('icon-home');
        const mensaje = document.getElementById('mensaje');
        const intervaloMostrar = 5000; // 5000 milisegundos = 5 segundos
        const tiempoMostrado = 3000;   // 3000 milisegundos = 3 segundos

        
        function iniciarMostrarMensaje() {
            // Verificar si el dispositivo es móvil (ancho de pantalla menor a 768px)
            const esFormatoMovil = window.matchMedia('(max-width: 768px)').matches;
        
            if (esFormatoMovil) {
                mostrarMensaje();
                setInterval(mostrarMensaje, intervaloMostrar, tiempoMostrado);
            }
        }

        // Variable para rastrear si el mensaje ya ha sido mostrado
        let mensajeMostrado = false;

        // Función para mostrar el mensaje flotante
        function mostrarMensaje() {
            if (!mensajeMostrado) {
                mensaje.style.display = 'block';
                setTimeout(() => {
                    mostrarMensajeCada5Segundos();
                }, tiempoMostrado);
        }
    }
        // Función para ocultar el mensaje flotante
        function ocultarMensaje() {
            mensaje.style.display = 'none';
        }

        // Temporizador para mostrar el mensaje cada 5 segundos
        

        function mostrarMensajeCada5Segundos() {
            mostrarMensaje();
            setInterval(tiempoMostrado, intervaloMostrar);
        }

        setInterval(mostrarMensajeCada5Segundos, intervaloMostrar);

        // Evento de clic en el icono para ocultar el mensaje si está visible y establecer mensajeMostrado como verdadero
        icono.addEventListener('click', () => {
            if (mensaje.style.display === 'block') {
                ocultarMensaje();
                mensajeMostrado = true;
            }
        });
*/