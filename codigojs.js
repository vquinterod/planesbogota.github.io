let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.querySelectorAll('nav ul li').forEach(function(item) {
    item.addEventListener('mouseover', function() {
        item.querySelector('ul').style.display = 'block';
    });
    item.addEventListener('mouseout', function() {
        item.querySelector('ul').style.display = 'none';
    });
});

function mostrarMensaje() {
    let mensaje = document.querySelector('.mensaje');
    let hora = new Date().getHours();
    let idioma = document.querySelector('.idioma select').value;

    if (idioma === 'es') {
        if (hora < 12) {
            mensaje.textContent = '¡Buenos días! Disfruta de tu visita a Bogotá.';
        } else if (hora < 18) {
            mensaje.textContent = '¡Buenas tardes! Continúa explorando Bogotá.';
        } else {
            mensaje.textContent = '¡Buenas noches! Gracias por visitar Bogotá.';
        }
    } else {
        if (hora < 12) {
            mensaje.textContent = 'Good morning! Enjoy your visit to Bogotá.';
        } else if (hora < 18) {
            mensaje.textContent = 'Good afternoon! Continue exploring Bogotá.';
        } else {
            mensaje.textContent = 'Good evening! Thanks for visiting Bogotá.';
        }
    }

}

function mostrarMensaje() {
    const mensajeDiv = document.querySelector('.mensaje');
    const hora = new Date().getHours();
    const idioma = document.querySelector('.idioma select').value;

    let mensaje = '';
    let fondo = '';

    if (hora >= 6 && hora < 12) {
        // Mañana
        mensaje = idioma === 'es'
            ? '¡Buenos días! Disfruta de tu visita a Bogotá.'
            : 'Good morning! Enjoy your visit to Bogotá.';
        fondo = 'rgba(255, 213, 128, 0.8)'; // Naranja suave con 80% opacidad
    } else if (hora >= 12 && hora < 18) {
        // Tarde
        mensaje = idioma === 'es'
            ? '¡Buenas tardes! Continúa explorando Bogotá.'
            : 'Good afternoon! Continue exploring Bogotá.';
        fondo = 'rgba(132, 174, 232, 0.8)'; // Azul cielo con opacidad
    } else {
        // Noche
        mensaje = idioma === 'es'
            ? '¡Buenas noches! Gracias por visitar Bogotá.'
            : 'Good evening! Thanks for visiting Bogotá.';
        fondo = 'rgba(44, 62, 80, 0.8)'; // Azul oscuro con opacidad
    }

    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.backgroundColor = fondo;
    mensajeDiv.style.color = 'white'; // Fijo: texto blanco
}


document.querySelector('.idioma select').addEventListener('change', mostrarMensaje);
mostrarMensaje();  // Llamar al cargar la página para mostrar el mensaje


// Lógica para abrir/cerrar el menú de reservas
const dropdown = document.getElementById('dropdown-reservas');
const button = dropdown.querySelector('.dropbtn');

// Mostrar u ocultar el dropdown
button.addEventListener('click', function (e) {
    e.stopPropagation(); // evita que se cierre de inmediato
    dropdown.classList.toggle('show');
});

// Cerrar si se hace clic fuera
document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});